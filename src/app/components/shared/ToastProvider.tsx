"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { flushPendingToast } from "@/app/lib/toast";

const ToastProvider = () => {
    const pathname = usePathname();

    useEffect(() => {
        flushPendingToast();
    }, [pathname]);

    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            closeButton={false}
            pauseOnHover
            limit={1}
            theme="light"
        />
    );
};

export default ToastProvider;