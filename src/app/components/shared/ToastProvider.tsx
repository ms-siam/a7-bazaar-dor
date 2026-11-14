"use client";

import { ToastContainer } from "react-toastify";

const ToastProvider = () => (
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeButton={false}
        pauseOnHover
        limit={2}
        theme="light"
    />
);

export default ToastProvider;