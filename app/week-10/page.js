"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  

  const handleLogin = async () => {
    await gitHubSignIn();
    router.push("/week-10/shopping-list"); 
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Week 10 – Cloud Firestore</h1>

      {!user ? (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin} className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer">Login with GitHub</button>
        </>
      ) : (
        <>
          <Link href="/week-10/shopping-list" className="underline text-cyan-400 hover:text-cyan-600">Go to Shopping List</Link>
        </>
      )}
    </main>
  );
}
