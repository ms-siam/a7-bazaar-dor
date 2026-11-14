
"use client";
import { showSuccess } from "@/app/lib/toast";
import { FaAngleDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiSignOut } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "@/app/lib/auth-client";
import Image from "next/image";

const AuthButtons = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    if (isPending) return <div className="h-10 w-14 sm:w-32" />;
    if (session) {
        const user = session.user;

        const handleSignOut = async () => {
            await signOut();
            setOpen(false);
            showSuccess("Signed out successfully.");
            router.push("/");
            router.refresh();
        };

        return (
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1.5 rounded-xl px-2 py-2 hover:bg-green-100 sm:gap-3 sm:px-3"
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-green-100 font-semibold text-green-800 sm:h-11 sm:w-11">
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={44}
                                height={44}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            user.name?.charAt(0).toUpperCase()
                        )}
                    </div>

                    <span className="hidden max-w-40 truncate text-base font-semibold text-gray-900 sm:block">
                        {user.name}
                    </span>

                    <FaAngleDown className="shrink-0 text-xs text-gray-500" />
                </button>

                {open && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setOpen(false)}
                        />

                        <div className="absolute right-0 z-50 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-3xl border border-green-100 bg-white p-5 shadow-xl sm:p-6">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                {user.name}
                            </h3>

                            <p className="mt-1 break-all text-sm text-gray-500">
                                {user.email}
                            </p>

                            <div className="my-4 border-t border-gray-100" />

                            <Link
                                href="/profile"
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-3 py-3 font-medium text-gray-800 hover:bg-green-50"
                            >
                                <CgProfile className="mr-2 inline" />
                                My Profile
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="w-full rounded-xl px-3 py-3 text-left font-medium text-red-600 hover:bg-red-50"
                            >
                                <PiSignOut className="mr-2 inline" />
                                Sign Out
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <div className="flex shrink-0 items-center gap-2 sm:gap-6">
            <Link
                href="/signin"
                className="whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium text-gray-900 hover:text-green-700 sm:px-3 sm:text-base"
            >
                Sign In
            </Link>

            <Link
                href="/signup"
                className="whitespace-nowrap rounded-lg bg-green-700 px-3 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-green-800 sm:px-6 sm:py-3 sm:text-base"
            >
                Sign Up
            </Link>
        </div>
    );
};

export default AuthButtons;
