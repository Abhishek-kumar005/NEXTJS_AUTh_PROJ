"use client";

import axios from "axios";
import Link from "next/link";
import React,{useEffect,useState} from "react";

export default function VerifyEmail(){
    const [token , setToken] = useState("");
    const [verified,setVerified]=useState(false);
    const [error,setError]= useState(false);

    const verifyUserEmail = async ()=>{
        try{

            await axios.post("/api/users/verifyemail",{token})

            setVerified(true);

        }catch(e:any){
            setError(true);
            console.log(e.response.data);

        }
    }

        useEffect(()=>{
            const urlToken = window.location.search.split("=")[1];
            setToken(urlToken||"");

        },[])

        useEffect(()=>{
            if(token.length>0){
                verifyUserEmail();
            }
        },[token]);

    

    return (
  <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center">

      {/* Logo */}
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl">
        🔐
      </div>

      <h1 className="mt-6 text-3xl font-bold text-white">
        Auth<span className="text-indigo-500">Flow</span>
      </h1>

      <p className="text-slate-400 mt-2">
        Email Verification
      </p>

      {/* Loading */}
      {!verified && !error && (
        <div className="mt-10">
          <div className="w-12 h-12 mx-auto border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-slate-300">
            Verifying your email...
          </p>

            <Link
            href="/signup"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
          >
            Go back to signup
          </Link>
        </div>
      )}

      {/* Success */}
      {verified && (
        <div className="mt-8">
          <div className="text-6xl">✅</div>

          <h2 className="mt-5 text-2xl font-bold text-green-400">
            Email Verified
          </h2>

          <p className="mt-3 text-slate-300">
            Your email has been verified successfully.
          </p>

          <Link
            href="/login"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition"
          >
            Continue to Login
          </Link>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-8">
          <div className="text-6xl">❌</div>

          <h2 className="mt-5 text-2xl font-bold text-red-400">
            Verification Failed
          </h2>

          <p className="mt-3 text-slate-300">
            This verification link is invalid or has expired.
          </p>

          <Link
            href="/signup"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition"
          >
            Create New Account
          </Link>
        </div>
      )}

    </div>
  </div>
);

}