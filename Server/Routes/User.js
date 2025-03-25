import express from "express";
import { signup, login,getUserBlogs } from "../Controllers/User.js";
import { sendOTPEmail, sendSignUpSuccessfulEmail } from "../Controllers/EmailServices.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/send-otp", sendOTPEmail);
router.post("/signup-success", sendSignUpSuccessfulEmail);
router.get('/getuserblogs/:userId',getUserBlogs);

export default router;
