import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request:NextRequest){
    try{
        const reqBody= await request.json();
        const {token,newpassword}= reqBody;
        const user = await User.findOne({forgotPasswordToken:token,
             forgotPasswordTokenExpiry:{$gt:Date.now()}
        })

          if(!user){
          return NextResponse.json({error:"Invalid or expired reset token"},{status:400})
        }
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(newpassword, salt);

        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;

    await user.save();

     return NextResponse.json({
      success: true,
      message: "Password reset successfully",
    });
     }catch(e:any){
         return NextResponse.json(
      { error: e.message },
      { status: 500 }
    );

    }
}