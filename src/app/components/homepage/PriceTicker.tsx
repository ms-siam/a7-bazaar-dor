import { FaCaretUp, FaCaretDown, FaMinus } from "react-icons/fa6";
import { Product } from "@/app/types/product";

const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { next: { revalidate: 300 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
};

const TickerItem = ({ product }: { product: Product }) => {
    const { dir, pct } = product.change;

    const color =
        dir === "up"
            ? "text-red-600" 
            : dir === "down"
            ? "text-green-700"
            : "text-gray-500";

    return (
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap bg-white px-4 py-1.5 text-sm sm:px-6 sm:py-1 sm:text-base">
            <span className="text-lg">{product.image}</span>
            <span className="font-semibold text-gray-900">{product.nameBn}</span>
            <span className="text-gray-500">
                {product.today} Tk/{product.unit}
            </span>
            <span className={`flex items-center gap-0.5 font-semibold ${color}`}>
                {dir === "up" && <FaCaretUp />}
                {dir === "down" && <FaCaretDown />}
                {dir === "flat" && <FaMinus className="text-xs" />}
                {Math.abs(pct)}%
            </span>
        </div>
    );
};

const PriceTicker = async () => {
    const products = await getProducts();

    return (
        <div className="group overflow-hidden border-b border-gray-200/70">
            <div className="ticker-track flex w-max">
                <div className="flex shrink-0">
                    {products.map((product) => (
                        <TickerItem key={product.id} product={product} />
                    ))}
                </div>

                <div className="flex shrink-0" aria-hidden="true">
                    {products.map((product) => (
                        <TickerItem key={`dup-${product.id}`} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PriceTicker;