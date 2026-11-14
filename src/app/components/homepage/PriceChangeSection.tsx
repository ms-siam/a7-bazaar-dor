import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { getProducts, toSummary } from "@/app//lib/products";
import ProductCard from "./ProductCard";

const PriceChangeSection = async ({ type }: { type: "up" | "down" }) => {
    const products = await getProducts();

    const list = products
        .filter((p) => p.change.dir === type)
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct)) // biggest change first
        .slice(0, 6)
        .map(toSummary);

    if (list.length === 0) return null;

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-6">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
                {type === "up" ? (
                    <FaCaretUp className="text-red-600" />
                ) : (
                    <FaCaretDown className="text-green-700" />
                )}
                {type === "up" ? "Prices Increased Today" : "Prices Decreased Today"}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default PriceChangeSection;