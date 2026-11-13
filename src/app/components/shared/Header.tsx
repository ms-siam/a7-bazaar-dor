import Image from "next/image";
import React from "react";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";

const Header = () => {
    const now = new Date();
    const fullDateTime = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div>
            <div>
                <Link href="/">
                    <div>
                        <Image src={logo} alt="logo"></Image>
                        <div>
                            <h2>BazaarDor</h2>
                            <h4>{fullDateTime}</h4>
                        </div>
                    </div>
                </Link>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default Header;
