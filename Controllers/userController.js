import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// create a new user(register)
export function registerUser(req, res) {
    if (req.body.type == 'admin') {
        // Check if the requesting user is an admin
        if (req.userDetails?.type != 'admin') {
            res.status(403).json({message: "You are not allowed to create admin accounts"});
            return;
        }
        
        // Create admin user
        const newAdmin = new UserModel(req.body);
        UserModel.find({email: newAdmin.email}).then((users) => {
            if (users.length > 0) {
                res.status(409).json({message: "Already created an account. Please log in"});
                return;
            } else {
                newAdmin.password = bcrypt.hashSync(newAdmin.password, 10);
                newAdmin.save().then(() => {
                    res.status(201).json({message: "Admin account created successfully"});
                }).catch((error) => {
                    res.status(500).json({message: "Error creating admin account"});
                });
            }
        }).catch((error) => {
            res.status(500).json({message: "Database error"});
        });
        
    } else {
        const newUser = new UserModel(req.body);
        UserModel.find({email: newUser.email}).then((users) => {
            if (users.length > 0) {
                res.status(409).json({message: "Already created an account. Please log in"});
                return;
            } else {
                newUser.password = bcrypt.hashSync(newUser.password, 10);
                newUser.save().then(() => {
                    res.status(201).json({message: "Account created"});
                }).catch((error) => {
                    res.status(500).json({message: "Error creating account"});
                });
            }
        }).catch((error) => {
            res.status(500).json({message: "Database error"});
        });
    }
}


// login a user
export function loginUser(req,res){
    const userData= req.body;

    UserModel.find({email:userData.email}).then((users)=>{
        if(users.length==0){
                res.status(404).json({message:"User not found"})
        }else{
            const user= users[0];
        const isPasswordCorrect=bcrypt.compareSync(userData.password,user.password)
        if(isPasswordCorrect){
            const token=jwt.sign({
                firstname:user.firstname,
                lastname:user.lastname,
                type:user.type,
                email:user.email
            },process.env.SECRET)
            res.status(200).json({
                message:"login successfull",
                token:token,
            user:{
                firstname:user.firstname,
                lastname:user.lastname,
                type:user.type,
                email:user.email
            }
            })
        }else{
            res.status(401).json({message:"incorrect password"})
        }
    }
    })
}

export function isAdmin(req){
    if(req.userDetails?.type=="admin"){
        return true;
    }else{
        return false;
    }
}

export function isCustomer(req){
    if(req.userDetails?.type=="customer"){
        return true;
    }else{
        return false;
    }
}



