"use client";

import Link from "next/link";
import { useSession } from "@/app/lib/auth-client";

const AuthButtons = () => {
    const { data: session, isPending } = useSession();

    if (isPending) return <div className="h-10 w-32" />;

    if (session) {
        return (
            <Link href="/profile" className="font-medium text-gray-900 hover:text-green-700">
                {session.user.name}
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-6">
            <Link href="/signin" className="font-medium text-gray-900 hover:text-green-700">
                Sign In
            </Link>
            <Link
                href="/signup"
                className="rounded-lg bg-green-700 px-6 py-2.5 font-medium text-white shadow-md shadow-green-900/20 hover:bg-green-800"
            >
                Sign Up
            </Link>
        </div>
    );
};

export default AuthButtons;