"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPassword(){
    const router= useRouter();
   const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

       useEffect(()=>{
             const urlToken = window.location.search.split("=")[1];
             setToken(urlToken||"");
 
         },[])

         const onResetPassword= async(e:React.FormEvent)=>{
            e.preventDefault();

         if (user.password !== user.confirmPassword) {
         toast.error("Passwords do not match");
         return;
       }
            try{
                setLoading(true);

                const response = await axios.post("/api/users/forgotpassword",{
                    token,
                    newpassword:user.password
                })
                 toast.success(response.data.message);
                 setTimeout(() => {
                router.push("/login");
                }, 2000);

            }catch(e:any){
                console.log(e);
                 toast.error(e.response?.data?.error || "Something went wrong");

            }finally{
                setLoading(false);
            }

         }
          return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 flex items-center justify-center">
              🔐
            </div>

            <h1 className="mt-3 text-2xl font-bold text-white">
              Auth<span className="text-indigo-500">Flow</span>
            </h1>
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Reset Password
          </h2>

          <p className="text-slate-400 mt-2">
            Enter your new password below.
          </p>
        </div>

        <form onSubmit={onResetPassword} className="space-y-5">

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              New Password
            </label>

            <input
              type="password"
              required
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="Enter new password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              required
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({
                  ...user,
                  confirmPassword: e.target.value,
                })
              }
              placeholder="Confirm password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-indigo-500 outline-none"
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-500 transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Back to{" "}
          <Link
            href="/login"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
    

}