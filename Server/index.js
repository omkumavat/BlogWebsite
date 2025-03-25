import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './Config/Database.js'

const app=express();
const PORT=process.env.PORT||4000;
connectDB();
app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

