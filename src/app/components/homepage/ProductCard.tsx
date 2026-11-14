import Link from "next/link";
import { FaCaretUp, FaCaretDown, FaMinus } from "react-icons/fa6";
import { ProductSummary } from "@/app/types/product";

const ProductCard = ({ product }: { product: ProductSummary }) => {
    const { dir, pct } = product.change;

    const badgeColor =
        dir === "up"
            ? "text-red-600"
            : dir === "down"
            ? "text-green-700"
            : "text-gray-500";

    return (
        <Link
            href={`/products/${product.slug}`}
            className="block rounded-2xl border border-gray-200/70 bg-[#fafcf9] p-5 transition-all hover:border-green-700 hover:shadow-md"
        >
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                    {product.image}
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold leading-tight text-gray-900">
                        {product.nameBn}
                    </h3>
                    <p className="text-sm text-gray-500">per {product.unit}</p>
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">Today&apos;s price</p>
            <div className="mt-1 flex items-center justify-between">
                <p className="text-gray-900">
                    <span className="text-2xl font-bold">
                        {product.today.toLocaleString("en-US")}
                    </span>{" "}
                    <span className="text-sm">Taka</span>
                </p>

                <span
                    className={`flex items-center gap-1 rounded-full bg-[#f0f5f0] px-3 py-1 text-sm font-semibold ${badgeColor}`}
                >
                    {dir === "up" && <FaCaretUp />}
                    {dir === "down" && <FaCaretDown />}
                    {dir === "flat" && <FaMinus className="text-xs" />}
                    {Math.abs(pct).toFixed(1)}%
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;