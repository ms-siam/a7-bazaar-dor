import { Category } from "@/app/types/category";
import CategoryList from "./CategoryList";

const getCategories = async (): Promise<Category[]>=> {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories/",
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
};

const NavCategory = async () => {
    const categories = await getCategories();

    return <CategoryList categories={categories}></CategoryList>
};

export default NavCategory;