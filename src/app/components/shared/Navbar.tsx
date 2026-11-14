import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Time from "../homepage/Time";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200/70 bg-[#fafcf9]">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="logo"
                        width={48}
                        height={48}
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

                <AuthButtons />
            </div>
        </header>
    );
};

export default Navbar;