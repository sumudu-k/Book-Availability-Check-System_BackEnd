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
export function loginUser(req, res) {
  const { email, password } = req.body;

  UserModel.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      const token = jwt.sign(
        {
          firstname: user.firstname,
          lastname: user.lastname,
          type: user.type,
          email: user.email,
        },
        process.env.SECRET
      );

      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          type: user.type,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      console.error("Login error:", err);
      res.status(500).json({ message: "Something went wrong", error: err.message });
    });
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



