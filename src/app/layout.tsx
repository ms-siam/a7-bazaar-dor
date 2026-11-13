import { Suspense } from "react";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
import Categories from "@/app/components/shared/NavCategory";





export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-[#f0f5f0]"
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <div className="border-b border-gray-200/70">
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
        {children}</body>
    </html>
  );
}
