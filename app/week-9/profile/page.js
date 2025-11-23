"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function ProfilePage() {
    const { user, firebaseSignOut } = useUserAuth();

    const handleLogout = async () => {
        await firebaseSignOut();
    };
    if (!user) {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Access Denied</h1>
            <p>You must be logged in to view this page.</p>
            <Link className="text-cyan-600 underline hover:text-cyan-300" href="/week-9">Back to Login</Link>
        </main>
    );
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

            <div className="border border-green-500 p-4 rounded">
            <p><strong>Name:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {user.photoURL && (
                <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mt-4"
                />
            )}
            </div>

            <br />
            <Link href="/week-9/shopping-list" className="underline text-blue-600 mb-4 block">
            Back to Shopping List
            </Link>

            <br />
            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded mb-4"
            >
                Logout
            </button>
        </main>
    );
}
