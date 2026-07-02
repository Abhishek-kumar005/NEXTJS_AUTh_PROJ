import nodemailer from 'nodemailer';
import User from "@/models/userModel"
import bcrypt from 'bcryptjs';
import { authEmailTemplate } from './emailTemplate';

export const sendEmail = async({email,emailType,userId}:any)=>{
    try{
       const token = await bcrypt.hash(userId.toString(),10);

      if(emailType==="VERIFY"){ await User.findByIdAndUpdate(userId,{
          verifyToken:token,
           verifyTokenExpiry:Date.now()+3600000
       })
    }else if(emailType==="RESET"){
        await User.findByIdAndUpdate(userId,{
         forgotPasswordToken:token,
        forgotPasswordTokenExpiry:Date.now()+3600000
       })

    }
    const user = await User.findById(userId);

    const actionUrl =
  emailType === "VERIFY"
    ? `${process.env.DOMAIN}/verifyemail?token=${token}`
    : `${process.env.DOMAIN}/forgotpassword?token=${token}`;

    // Create a transporter using SMTP
var transport = nodemailer.createTransport({
   service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }

});
const html = authEmailTemplate(
    user.username,
    actionUrl,
    emailType
)


const mailOption={
    from: `"AuthFlow" <${process.env.EMAIL}>`,
    to:email,
    subject:emailType==="VERIFY"?"Verify your email":"Reset your password",
    html,

}

const  mailResponse = await transport.sendMail(mailOption);
console.log(mailResponse);
return mailResponse;




    }catch(e:any){
        throw new Error(e.message)
    }

}

