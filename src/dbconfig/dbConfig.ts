import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection= mongoose.connection;

        connection.on('connected',()=>{
            console.log("MONGODB CONNECTED SUCCESFULLY")
        })
        
        connection.on('error',(err)=>{
            console.log("mongodb connection error." +err);
            process.exit();
        })


    }catch(e){
        console.log("Something went wrong",e);
    }

}