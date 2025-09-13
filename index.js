import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
dotenv.config()
import userRouter from "./Routes/userRouter.js";
import bookRouter from "./Routes/bookRouter.js";
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI,{})
const connection=mongoose.connection
connection.once('open',()=>{console.log("DB connected")})

app.use((req,res,next)=>{
    const token = req.header("authorization")?.replace("Bearer ", "");
    console.log(token)
    if(token!=null){
        jwt.verify(token,process.env.SECRET,(error,decoded)=>{
        if(!error){
            req.userDetails=decoded;
        }

    })
    }
    next()
})

app.use('/user',userRouter);
app.use('/books',bookRouter)

app.listen(3000,()=>{
    console.log("app is running on port 3000")
})