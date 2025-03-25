import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
import connectDB from './Config/Database.js'
import User from './Routes/User.js';
import Category from './Routes/Category.js';
import Blog from './Routes/Blog.js';

const app=express();
const PORT=process.env.PORT||4000;
connectDB();
app.use(express.json()); 
app.use(cors());  
app.use(express.json({ limit: '1gb' })); 
app.use(express.urlencoded({ limit: '1gb', extended: true })); 

app.use('/server/user',User);
app.use('/server/category',Category);
app.use('/server/blog',Blog);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'src', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get("/s", (req, res) => {
  res.render("SignupOTP", { name: "BlogWeb",otp:"123456"});
});

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port:${PORT}`);
})

export default app;