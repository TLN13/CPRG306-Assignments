"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, logOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E9E4E0] text-[#172A39]">
      {user ? (
        <div className="text-center space-y-4">
          <p className="text-5xl text-[#172A39] font-semi-bold">
            Welcome, {user.displayName} ({user.email})
          </p>

          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-[#FC563C] text-white rounded-lg hover:opacity-90 cursor-pointer"
          >
            Log Out
            </button>

          <div>
            <Link
              href="/week-8/shopping-list"
              className="text-[#6E7575] underline hover:text-[#FC563C]"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
            <h1 className="text-7xl font-bold">Welcome</h1>

           <button
            onClick={handleSignIn}
            className="px-6 py-3 bg-white text-[#172A39] rounded-xl shadow-md border-4 border-[#6E7575] hover:border-[#FC563C] hover:shadow-lg cursor-pointer text-lg font-medium"
            >
            Sign In with GitHub
            </button>
        </div>
      )}
    </main>
  );
}