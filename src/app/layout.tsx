import { Suspense } from "react";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
import Categories from "@/app/components/shared/NavCategory";
import Footer from "@/app/components/shared/Footer";
import ToastProvider from "@/app/components/shared/ToastProvider";




export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className="scroll-smooth bg-[#f0f5f0]">
            <body className="min-h-screen flex flex-col">
                <ToastProvider />
                {/* Sticky Navbar + Categories */}
                <div className="sticky top-0 z-50">
                    <Navbar />

                    <div className="border-b border-gray-200/70 bg-[#fafcf9]">
                        <Suspense
                            fallback={
                                <div className="mx-auto max-w-6xl px-4 py-3 text-sm text-gray-400">
                                    Loading categories...
                                </div>
                            }
                        >
                            <Categories />
                        </Suspense>
                    </div>
                </div>

                {children}

                <Footer />

            </body>
        </html>
    );
}

