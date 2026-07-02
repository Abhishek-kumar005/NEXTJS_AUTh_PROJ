"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("Login successful!");
      console.log(response.data);
      router.push("/profile");


     
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
        
         <div className="text-center mb-5">

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
    Login to continue to AuthFlow.
  </p>

</div>

        {/* Form */}
        <form onSubmit={onLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              required
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/sendemailforgotpassword"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}