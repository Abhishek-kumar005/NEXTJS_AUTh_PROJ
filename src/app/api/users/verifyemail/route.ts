import {connect} from "@/dbconfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"

connect();

export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json();
        const {token}=reqBody

        const user = await User.findOne({ verifyToken:token,
             verifyTokenExpiry:{$gt:Date.now()}
        })

        if(!user){
             return NextResponse.json({error:"user not found"},{status:400})

        }

        user.isverified =true;
         user.verifyToken=undefined;
         user.verifyTokenExpiry=undefined;

         await user.save();

         return NextResponse.json({message:"Email verified",
            success:true})



    }catch(e:any){
        return NextResponse.json({error:e.message},{status:500})

    }
    
}