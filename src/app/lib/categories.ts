import { Category } from "@/app/types/category";

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories/",
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
};