"use client"
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onForgotPassword= async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
        setLoading(true);
        const response = await axios.post("/api/users/sendemailforgotpassword",{email});
     toast.success(response.data.message);
    setEmailSent(true);
    setEmail("");



    }catch(error:any){
        console.log(error);
         toast.error(error.response?.data?.error || "Something went wrong");

    }finally{
       setLoading(false);

    }
  }

  return(
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        {/* Branding */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center">
              <span className="text-2xl">🔐</span>
            </div>

            <h1 className="mt-3 text-2xl font-bold text-white">
              Auth<span className="text-indigo-500">Flow</span>
            </h1>
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Forgot Password?
          </h2>

          <p className="mt-2 text-slate-400">
            No worries! Enter your registered email address and we'll send you
            a password reset link.
          </p>
        </div>

        <form onSubmit={onForgotPassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
          >
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </button>
        </form>

        {emailSent && (
          <div className="mt-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
            <p className="text-green-400 text-center font-medium">
              ✅ Reset link sent successfully!
            </p>

            <p className="mt-2 text-center text-sm text-slate-300">
              Please check your inbox (and spam folder) for the password reset
              email.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-sm text-indigo-400 hover:text-indigo-300"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>

  )


   

}