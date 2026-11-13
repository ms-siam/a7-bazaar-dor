import Link from "next/link";
import { Category } from "@/app/types/category";

const getCategories = async (): Promise<Category[]>=> {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories/",
        { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
};

const NavCategory = async () => {
    const categories = await getCategories();

    return (
        <nav className="mx-auto max-w-6xl px-4">
            <ul className="flex items-center gap-8 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                    <li key={category.id} className="shrink-0">
                        <Link
                            href={`/category/${category.slug}`}
                            className="flex items-center gap-2 font-medium text-gray-800 transition-colors hover:text-green-700"
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.nameBn}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavCategory;