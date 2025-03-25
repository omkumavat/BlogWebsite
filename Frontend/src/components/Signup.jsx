import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Signup({ onSwitchToLogin }) {
  // Steps: "initial" (collect name & email), "otp" (verify OTP), "password" (set password)
  const [signupStep, setSignupStep] = useState("initial");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // Use 5-digit OTP instead of 4; store each digit separately.
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpAttempts, setOtpAttempts] = useState(3);
  const [timer, setTimer] = useState(120); // in seconds (2 minutes)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Countdown timer effect for OTP step.
  useEffect(() => {
    let interval = null;
    if (signupStep === "otp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [signupStep, timer]);

  // Helpers to format timer as mm:ss.
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (secs % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Validation functions for each step.
  const validateInitialStep = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    return newErrors;
  };

  const validateOtpStep = () => {
    const newErrors = {};
    if (otp.some((digit) => digit.trim() === "")) {
      newErrors.otp = "Please enter the complete 5-digit code";
    }
    return newErrors;
  };

  const validatePasswordStep = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = "New Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  // Generate a random 5-digit OTP (as a string) and store it.
  const generateOtp = () => {
    const otpValue = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(otpValue);
    // Set the otp input fields to empty
    setOtp(Array(5).fill(""));
    return otpValue;
  };

  // Handle initial step continue:
  const handleInitialContinue = async () => {
    const validationErrors = validateInitialStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Generate OTP and call backend to send OTP to the provided email.
    const otpValue = generateOtp();
    try {
      // Call your backend endpoint, e.g., /api/send-otp
      await axios.post("", { fullName, email, otp: otpValue });
      toast.success("OTP has been sent to your email");
      setTimer(120);
      setOtpAttempts(3);
      setSignupStep("otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto-focus next input if a digit is entered.
      if (value && index < 4) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpVerify = () => {
    const validationErrors = validateOtpStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const enteredOtp = otp.join("");
    if (enteredOtp === generatedOtp) {
      toast.success("OTP verified successfully");
      setSignupStep("password");
    } else {
      const attemptsLeft = otpAttempts - 1;
      setOtpAttempts(attemptsLeft);
      if (attemptsLeft > 0) {
        toast.error(`Incorrect OTP. You have ${attemptsLeft} attempt(s) left.`);
      } else {
        toast.error("No attempts left. Please try again.");
        // Optionally, you can reset to the initial step or allow a resend.
        setSignupStep("initial");
      }
    }
  };

  const handleCreateAccount = async () => {
    const validationErrors = validatePasswordStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      // Call your backend to create account, e.g., /api/create-account
      await axios.post("/api/create-account", { fullName, email, password });
      toast.success("Account created successfully");
      // Optionally, switch to login or redirect the user.
      onSwitchToLogin();
    } catch (error) {
      console.error("Account creation error:", error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderSignupStep = () => {
    switch (signupStep) {
      case "initial":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <button
              onClick={handleInitialContinue}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : (
                <>
                  <span>Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        );

      case "otp":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Enter Verification Code</h3>
              <p className="text-gray-500 mt-2">
                We've sent a code to your email
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Time remaining: {formatTime(timer)}
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              ))}
            </div>
            {errors.otp && (
              <p className="text-sm text-red-500 text-center">{errors.otp}</p>
            )}
            <button
              onClick={handleOtpVerify}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Verify OTP</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        );

      case "password":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              onClick={handleCreateAccount}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      {renderSignupStep()}

      {signupStep === "initial" && (
        <>
          {/* Divider */}
          <div className="mt-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <div className="px-4 text-sm text-gray-500">or</div>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Switch to Login */}
          <button
            onClick={onSwitchToLogin}
            className="mt-8 flex items-center justify-center text-blue-600 hover:text-blue-700"
          >
            Already have an account?
            <span className="ml-1 font-semibold flex items-center">
              Sign in <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </button>
        </>
      )}
    </>
  );
}

export default Signup;
