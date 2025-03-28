import Blog from "../Models/Blog.js";
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendSignUpSuccessfulEmail } from "./EmailServices.js";


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

    // Save the user first
    const savedUser = await newUser.save();

    // Now construct payload from the saved user
    const payload = {
      userId: savedUser._id,
      email: savedUser.email,
      name: savedUser.name,
    };

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

    // Send email (make sure this doesn't interfere with your response)
    const body = { name: fullName, email };
    await sendSignUpSuccessfulEmail(body);

    return res.status(201).json({
      message: "User registered successfully",
      status: true,
      token,
      user: payload,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Internal server error", status: false });
  }
};


export const login = async (req, res) => {
  try {
    // console.log("Request Body:", req.body);
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


export const getUserBlogs = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required", status: false });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }
    const blogs = await Blog.find({ author: userId })
      .populate("author", "name email")
      .populate("category", "name")
    res.status(200).json({ message: "User blogs fetched successfully", status: true, blogs });
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};
