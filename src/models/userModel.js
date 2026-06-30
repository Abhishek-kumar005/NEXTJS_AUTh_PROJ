import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"please provide a username"],
        trim:true,
        unique:true,
    },
    email:{
        type: String,
        required:[true,"please provide email"],
        unique:true,


    },
    password:{
        type:String,
        required:["true","please provide a password"],
    },
    isverified:{
        type:Boolean,
        default:false,

    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,



})

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;