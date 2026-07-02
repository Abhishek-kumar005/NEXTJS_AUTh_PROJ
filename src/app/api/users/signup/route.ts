import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {username,email,password}=reqBody
         const user = await User.findOne({
           $or: [
         { email },
         { username }
           ]
          });

        if (user) {
          return NextResponse.json(
            { error: "Email or Username already exists" },
            { status: 400 }
          );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt)

        const newuser = new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser = await newuser.save();

        //send verification email 

        await sendEmail({email,emailType:"VERIFY", userId:savedUser._id})


        return NextResponse.json({
            message:"user created successfully",
            success:true,
            savedUser
        })



    }catch(error:any){
          console.error("Signup Error:", error);
        return NextResponse.json({error:error.message},
            {status:500}
        )

    }
}