export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Profile Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-5xl font-bold text-white">
              A
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white">
                Abhishek Kumar /{id}
              </h1>

              <p className="text-slate-400 mt-1">
                abhishek@gmail.com
              </p>

              <p className="text-slate-300 mt-4 max-w-2xl">
                Full Stack Developer building scalable web applications with
                MERN, Next.js and modern technologies.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <div className="bg-slate-800 px-5 py-3 rounded-xl">
                  <p className="text-xl font-bold text-white">12</p>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>

                <div className="bg-slate-800 px-5 py-3 rounded-xl">
                  <p className="text-xl font-bold text-white">248</p>
                  <p className="text-sm text-slate-400">Followers</p>
                </div>

                <div className="bg-slate-800 px-5 py-3 rounded-xl">
                  <p className="text-xl font-bold text-white">89</p>
                  <p className="text-sm text-slate-400">Following</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition">
              Edit Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}