"use client";
import Link from "next/link";
import React ,{useEffect}from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function Signup(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled,setButtonDisabled]=React.useState(false);

    const onSignup = async(e:any)=>{
          e.preventDefault();

          try{
            setButtonDisabled(true);
            const response = await axios.post("/api/users/signup",user);
            toast.success("Account created successfully!");
            console.log(response.data);
            router.push("/login?message=login-required");
          
          }catch(e:any){
            console.log("signup failed",e);
            toast.error(e.message)

          }finally{
              setButtonDisabled(false);
          }


      

    }

    return(

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-6">

  {/* Brand */}
  <div className="flex flex-col items-center justify-center mb-2">
  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center">
    <span className="text-2xl">🔐</span>
  </div>

  <h1 className="mt-3 text-2xl font-bold text-white">
    Auth<span className="text-indigo-500">Flow</span>
  </h1>
</div>

  {/* Heading */}
  <h2 className="text-3xl font-bold text-white mt-1">
    Create Account
  </h2>

  <p className="text-slate-400 mt-1">
    Create your account and start exploring AuthFlow.
  </p>

</div>

        {/* Form */}
        <form className="space-y-5"  onSubmit={onSignup}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Username
            </label>

            <input
            id="username"
            value={user.username}
            onChange={(e)=>{
                setUser({...user,username:e.target.value})
            }}
            type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>

            <input
            id="email"
            value={user.email}
            onChange={(e)=>{
                setUser({...user,email:e.target.value})
            }}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
            id="password"
            value={user.password}
            onChange={(e)=>{
                setUser({...user,password:e.target.value})
            }}
              type="password"
              placeholder="Create password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            {buttonDisabled?"Loading...":"Sign up"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300"
            >         
              Login
            </Link>
        </p>
      </div>
    </div>
      
    )
}