import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
             <b className="text-red-500">AuthFlow -</b> <i> Full Stack Authentication System</i>
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white">
            Secure.
            <span className="text-indigo-500"> Authenticate.</span>
            <br />
            Protect.
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            A complete authentication system built with Next.js, JWT,
            HTTP-only Cookies, Email Verification, Password Reset and
            Middleware-based Route Protection.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Highlights */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-white">JWT</h3>
            <p className="text-slate-400 mt-2">Token Authentication</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-white">Cookies</h3>
            <p className="text-slate-400 mt-2">HTTP Only Security</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-white">Middleware</h3>
            <p className="text-slate-400 mt-2">Protected Routes</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Authentication Features
          </h2>

          <p className="text-slate-400 mt-4">
            Everything required for a production-ready authentication system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">🔐</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              User Authentication
            </h3>

            <p className="text-slate-400 mt-3">
              Secure signup, login and logout functionality using JWT.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">✉️</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              Email Verification
            </h3>

            <p className="text-slate-400 mt-3">
              Verify users through email before granting access.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">🔑</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              Password Reset
            </h3>

            <p className="text-slate-400 mt-3">
              Forgot password and reset password functionality.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">🍪</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              Secure Cookies
            </h3>

            <p className="text-slate-400 mt-3">
              Authentication tokens stored in HTTP-only cookies.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">🛡️</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              Route Protection
            </h3>

            <p className="text-slate-400 mt-3">
              Middleware ensures only authenticated users access protected
              routes.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl">⚡</div>

            <h3 className="text-xl font-semibold text-white mt-6">
              Full Stack Next.js
            </h3>

            <p className="text-slate-400 mt-3">
              Built with Next.js App Router, API Routes and MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Authentication Flow
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-semibold text-xl">
              User Registration
            </h3>

            <p className="text-slate-400 mt-3">
              Create a new account with email verification support.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-semibold text-xl">
              Secure Login
            </h3>

            <p className="text-slate-400 mt-3">
              Login using JWT authentication and secure cookies.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-white font-semibold text-xl">
              Protected Dashboard
            </h3>

            <p className="text-slate-400 mt-3">
              Access profile and protected routes after authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "Next.js",
              "TypeScript",
              "MongoDB",
              "JWT",
              "bcryptjs",
              "Nodemailer",
              "Tailwind CSS",
              "Middleware",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to explore AuthVault?
          </h2>

          <p className="text-slate-400 mt-4">
            Experience a production-ready authentication system built with
            modern Next.js practices.
          </p>

          <Link
            href="/signup"
            className="inline-block mt-8 px-8 py-4 bg-indigo-600 rounded-xl text-white font-semibold hover:bg-indigo-500 transition"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}