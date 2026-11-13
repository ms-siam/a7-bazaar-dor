import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Time from "../homepage/Time";


const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200/70 bg-[#fafcf9]">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="logo"
                        className="h-12 w-12 rounded-xl bg-green-700 object-contain p-2"
                    />
                    <div className="leading-tight">
                        <h2 className="text-2xl font-bold text-gray-900">BazaarDor</h2>
                        <h4 className="text-sm text-gray-500">
                            <Suspense fallback={<span>Loading...</span>}>
                                <Time />
                            </Suspense>
                        </h4>
                    </div>
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/signin"
                        className="font-medium text-gray-900 transition-colors hover:text-green-700"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="rounded-lg bg-green-700 px-6 py-2.5 font-medium text-white shadow-md shadow-green-900/20 transition-colors hover:bg-green-800"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            
        </header>
    );
};

export default Navbar;