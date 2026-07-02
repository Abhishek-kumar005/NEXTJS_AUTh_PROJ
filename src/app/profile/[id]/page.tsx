"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

export default function ProfilePage() {
   const params = useParams();
  const id = params.id as string; // id from routes;


  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUser(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/");
    } catch (err) {
      toast.error("Logout failed");
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">

      {/* ================= Navbar ================= */}

      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            Auth<span className="text-indigo-500">Flow</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/profile"
              className="text-indigo-400"
            >
              Dashboard
            </Link>

            <Link
              href="/settings"
              className="text-slate-300 hover:text-white"
            >
              Settings
            </Link>

          </div>

          <button
            onClick={logout}
            className="rounded-xl bg-red-600 hover:bg-red-700 px-5 py-2 text-white font-semibold transition"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* ================= Hero ================= */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg">

              {user.username.charAt(0).toUpperCase()}

            </div>

            {/* User */}

            <div className="flex-1">

                 <p className="text-slate-400 mb-10">
                 request id-- {id}
              </p>

              <p className="text-indigo-400 font-medium">
                Welcome Back 👋
              </p>

              <h1 className="text-4xl font-bold text-white mt-2">
                {user.username}
              </h1>

              <p className="text-slate-400 mt-3">
                {user.email}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  ✅ Account Active
                </span>

                <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold">
                  🔐 Email Verified
                </span>

              </div>

            </div>

            <div>

              <Link
                href="/sendemailforgotpassword"
                className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl text-white font-semibold"
              >
                Change Password
              </Link>

            </div>

          </div>

        </div>

        {/* ================= Account Information ================= */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-2xl font-bold text-white mb-8">
            Account Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-6">

              <p className="text-slate-400 text-sm">
                Username
              </p>

              <h3 className="text-white text-xl font-semibold mt-2">
                {user.username}
              </h3>

            </div>

            <div className="bg-slate-800 rounded-xl p-6">

              <p className="text-slate-400 text-sm">
                Email Address
              </p>

              <h3 className="text-white text-xl font-semibold mt-2 break-all">
                {user.email}
              </h3>

            </div>

            <div className="bg-slate-800 rounded-xl p-6">

              <p className="text-slate-400 text-sm">
                Account Status
              </p>

              <h3 className="text-green-400 text-xl font-semibold mt-2">
                Active
              </h3>

            </div>

            <div className="bg-slate-800 rounded-xl p-6">

              <p className="text-slate-400 text-sm">
                Authentication
              </p>

              <h3 className="text-indigo-400 text-xl font-semibold mt-2">
                JWT + Cookies
              </h3>

            </div>

          </div>

        </div>
                {/* ================= Security Overview ================= */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-white mb-6">
            Security Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500 transition">

              <div className="text-4xl mb-4">📧</div>

              <h3 className="text-white font-semibold text-lg">
                Email Status
              </h3>

              <p className="text-green-400 mt-2">
                Verified
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500 transition">

              <div className="text-4xl mb-4">🔑</div>

              <h3 className="text-white font-semibold text-lg">
                Authentication
              </h3>

              <p className="text-indigo-400 mt-2">
                JWT Enabled
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500 transition">

              <div className="text-4xl mb-4">🔒</div>

              <h3 className="text-white font-semibold text-lg">
                Password
              </h3>

              <p className="text-slate-300 mt-2">
                bcrypt Protected
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500 transition">

              <div className="text-4xl mb-4">🍪</div>

              <h3 className="text-white font-semibold text-lg">
                Session
              </h3>

              <p className="text-slate-300 mt-2">
                Secure Cookies
              </p>

            </div>

          </div>

        </div>

        {/* ================= Authentication Features ================= */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-2xl font-bold text-white mb-8">
            Authentication Features
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              "User Registration",
              "Secure Login",
              "Email Verification",
              "Forgot Password",
              "Password Reset",
              "JWT Authentication",
              "Protected Routes",
              "Secure Cookies",
              "Password Hashing (bcrypt)",
              "Logout",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 bg-slate-800 rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-lg">
                  ✓
                </div>

                <span className="text-white font-medium">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>
                {/* ================= Security Tips ================= */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            🛡️ Security Tips
          </h2>

          <div className="space-y-4">

            <div className="flex gap-4 bg-slate-800 rounded-xl p-5">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="text-white font-semibold">
                  Use a Strong Password
                </h3>
                <p className="text-slate-400 mt-1">
                  Always use a strong password containing uppercase letters,
                  lowercase letters, numbers and special characters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-slate-800 rounded-xl p-5">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="text-white font-semibold">
                  Verify Your Email
                </h3>
                <p className="text-slate-400 mt-1">
                  Email verification protects your account and allows password
                  recovery when needed.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-slate-800 rounded-xl p-5">
              <span className="text-2xl">💻</span>
              <div>
                <h3 className="text-white font-semibold">
                  Logout on Shared Devices
                </h3>
                <p className="text-slate-400 mt-1">
                  Always logout after using your account on a public or shared
                  computer.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= Quick Actions ================= */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/sendemailforgotpassword"
              className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition p-6 text-center"
            >
              <div className="text-4xl mb-3">🔑</div>

              <h3 className="text-white text-xl font-semibold">
                Change Password
              </h3>

              <p className="text-indigo-100 mt-2 text-sm">
                Send a password reset email.
              </p>

            </Link>

            <button
              onClick={logout}
              className="rounded-2xl bg-red-600 hover:bg-red-500 transition p-6"
            >
              <div className="text-4xl mb-3">🚪</div>

              <h3 className="text-white text-xl font-semibold">
                Logout
              </h3>

              <p className="text-red-100 mt-2 text-sm">
                End your current session securely.
              </p>

            </button>

          </div>

        </div>

        {/* ================= Footer ================= */}

        <div className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">

          <h2 className="text-2xl font-bold text-white">
            Built with ❤️
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-6">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "MongoDB",
              "JWT",
              "bcrypt",
              "Nodemailer",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}

          </div>

          <p className="mt-8 text-slate-500 text-sm">
            © {new Date().getFullYear()} AuthFlow — Secure Authentication
            System
          </p>

        </div>

      </div>

    </div>
  );
}

  
    