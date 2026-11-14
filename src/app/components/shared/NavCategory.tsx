import CategoryList from "./CategoryList";

import { getCategories } from "@/app/lib/categories";

const NavCategory = async () => {
    const categories = await getCategories();

    return <CategoryList categories={categories}></CategoryList>
};

export default NavCategory;