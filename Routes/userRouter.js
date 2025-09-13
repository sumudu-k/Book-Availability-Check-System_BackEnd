import express from "express";
import { loginUser,registerUser } from "../Controllers/userController.js";
const userRouter = new express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)

export default userRouter;