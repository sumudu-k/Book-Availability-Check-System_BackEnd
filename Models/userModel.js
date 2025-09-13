import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },lastname:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },type:{
        type:String,
        default:"customer",
        required:true
    }
})

const UserModel = new mongoose.model('users',UserSchema)

export default UserModel;

