"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/app/types/category";

const CategoryList = ({ categories }: { categories: Category[] }) => {
    const pathname = usePathname();

    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-6xl px-4 ">
                <ul className="flex items-center gap-2 overflow-x-auto py-1">
                {categories.map((category) => {
                    const href = `/category/${category.slug}`;
                    const isActive = pathname === href;

                    return (
                        <li key={category.id} className="shrink-0">
                            <Link
                                href={href}
                                aria-current={isActive ? "page" : undefined}
                                className={`flex items-center gap-2 rounded-lg border px-4 py-0.5 transition-colors ${
                                    isActive
                                        ? "border-green-700 bg-green-700 text-white shadow-sm"
                                        : "border-transparent text-gray-800 hover:border-gray-300 hover:bg-gray-200/80"
                                }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.nameBn}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            </div>
            
        </nav>
    );
};

export default CategoryList;