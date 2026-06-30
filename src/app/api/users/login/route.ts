import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const {email,password}=reqBody
        
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User not found"},
                {status:400})
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return NextResponse.json({error:"Invalid credentials"},{status:400})
        }

        const tokenData ={
            id:user._id,
            email:user.email,
            username:user.username
        }

        const token = await jwt.sign(tokenData,
            process.env.TOKEN_SECRECT!,{expiresIn:"1d"})

            const response = NextResponse.json({
                message:"Login successful",
                success:true,
            })
            response.cookies.set("token",token,{
                httpOnly:true,
            })
            return response

    }catch(e:any){
        return NextResponse.json({error:e.message},{status:500})
    }

}