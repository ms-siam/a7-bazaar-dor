"use client";

import { useMemo, useState } from "react";
import { ProductSummary } from "@/app/types/product";
import ProductCard from "./ProductCard";
import SortDropdown, { SortOption } from "./SortDropdown";

const AllProductsGrid = ({ products }: { products: ProductSummary[] }) => {
    const [sort, setSort] = useState<SortOption>("default");

    const sorted = useMemo(() => {
        if (sort === "price-asc") return [...products].sort((a, b) => a.today - b.today);
        if (sort === "price-desc") return [...products].sort((a, b) => b.today - a.today);
        return products;
    }, [products, sort]);

    return (
        <>
            <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="text-sm text-gray-500 sm:text-base">
                    Showing {sorted.length} products in total
                </p>
                <SortDropdown value={sort} onChange={setSort} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sorted.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default AllProductsGrid;