import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "User already exists", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", status: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", status: false });
  }
};

export const login = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { email, password } = req.body;

    // Try to find the user.
    let user;
    try {
      user = await User.findOne({ email });
    } catch (findError) {
      console.error("Error finding user:", findError);
      return res.status(500).json({
        message: "Error finding user",
        status: false,
      });
    }

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        status: false,
      });
    }

    // Try to compare passwords.
    let isMatch;
    try {
      isMatch = await bcrypt.compare(password, user.password);
    } catch (compareError) {
      console.error("Error comparing passwords:", compareError);
      return res.status(500).json({
        message: "Error verifying password",
        status: false,
      });
    }

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
        status: false,
      });
    }

    const payload = { userId: user._id, email: user.email, name: user.name };

    // Try to sign the JWT.
    let token;
    try {
      token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
    } catch (jwtError) {
      console.error("Error signing JWT:", jwtError);
      return res.status(500).json({
        message: "Error generating token",
        status: false,
      });
    }

    return res.status(200).json({
      message: "Login successful",
      status: true,
      token,
      user: payload,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
    });
  }
};
