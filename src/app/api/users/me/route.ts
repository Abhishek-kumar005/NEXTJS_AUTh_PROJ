import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbconfig/dbConfig"

connect();

export async function GET(request:NextRequest){
    try{
        const id = getDataFromToken(request);
       const user= await User.findById(id).select("-password");
       return NextResponse.json({messag:"user found",data:user})

    }catch(e:any){
        return NextResponse.json({error:e.message})

    }
}
