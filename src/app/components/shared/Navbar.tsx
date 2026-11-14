import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Time from "../homepage/Time";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200/70 bg-[#fafcf9]">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-4 sm:py-5">
                {/* Logo and Brand */}
                <Link
                    href="/"
                    className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
                >
                    <Image
                        src={logo}
                        alt="logo"
                        width={48}
                        height={48}
                        className="h-10 w-10 shrink-0 rounded-xl bg-green-700 object-contain p-2 sm:h-12 sm:w-12"
                    />

                    <div className="min-w-0 leading-tight">
                        <h2 className="truncate text-lg font-bold text-gray-900 sm:text-2xl">
                            BazaarDor
                        </h2>

                        <h4 className="mt-0.5 truncate text-[11px] leading-4 text-gray-500 sm:mt-1 sm:text-sm sm:leading-5">
                            <Suspense fallback={<span>Loading...</span>}>
                                <Time />
                            </Suspense>
                        </h4>
                    </div>
                </Link>

                {/* Authentication */}
                <div className="shrink-0">
                    <AuthButtons />
                </div>
            </div>
        </header>
    );
};

export default Navbar;