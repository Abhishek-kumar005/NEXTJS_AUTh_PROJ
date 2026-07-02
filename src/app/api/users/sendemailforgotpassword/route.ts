import {connect} from "@/dbconfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import { sendEmail } from "@/helpers/mailer";

connect();

export  async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email}= reqBody;
        const user = await User.findOne({email});
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    
    await sendEmail({
      email,
      emailType: "RESET",
      userId: user._id,
    });

     return NextResponse.json({
      success: true,
      message: "Password reset email sent successfully",
    });

}catch(e:any){
  console.log(e);
        return NextResponse.json(
      { error: e.message },
      { status: 500 }
    );

    }
}