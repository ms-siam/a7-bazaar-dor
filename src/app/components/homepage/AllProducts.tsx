import { getProducts, toSummary } from "@/app/lib/products";
import AllProductsGrid from "./AllProductsGrid";

const AllProducts = async () => {
    const products = (await getProducts()).map(toSummary);

    return (
        <section id="all-products" className="mx-auto w-full max-w-6xl scroll-mt-6 px-4 py-8">
            <h2 className="mb-1 text-2xl font-bold text-gray-900">All Products</h2>
            <AllProductsGrid products={products} />
        </section>
    );
};

export default AllProducts;