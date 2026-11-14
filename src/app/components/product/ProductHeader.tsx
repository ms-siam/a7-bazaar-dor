import { FaCaretUp, FaCaretDown, FaMinus } from "react-icons/fa6";
import { Product } from "@/app/types/product";

const ProductHeader = ({ product }: { product: Product }) => {
    const { dir, pct } = product.change;
    const diff = Math.abs(product.today - product.yesterday);

    const color =
        dir === "up" ? "text-red-600" : dir === "down" ? "text-green-700" : "text-gray-500";

    const message =
        dir === "flat" ? (
            <>Price is <strong>unchanged</strong> compared to yesterday</>
        ) : (
            <>
                Compared to yesterday, price{" "}
                <strong>{dir === "up" ? "increased" : "decreased"}</strong> by {diff} Taka
            </>
        );

    return (
        <section className="mb-6 flex flex-col gap-6 rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl">
                    {product.image}
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {product.nameBn}
                    </h1>
                    <p className="mt-1 text-gray-500">
                        per {product.unit} · {product.categoryNameBn}
                    </p>
                    <p className="mt-1 text-sm text-gray-800">{message}</p>
                </div>
            </div>

            <div className="rounded-2xl bg-[#f0f5f0] px-8 py-5 text-center">
                <p className="text-sm text-gray-500">Today&apos;s price</p>
                <p className="text-4xl font-extrabold text-gray-900">
                    {product.today.toLocaleString("en-US")}
                </p>
                <p className="text-sm text-gray-500">Taka / {product.unit}</p>
                <p className={`mt-1 flex items-center justify-center gap-1 text-sm font-semibold ${color}`}>
                    {dir === "up" && <FaCaretUp />}
                    {dir === "down" && <FaCaretDown />}
                    {dir === "flat" && <FaMinus className="text-xs" />}
                    {Math.abs(pct).toFixed(1)}%
                </p>
            </div>
        </section>
    );
};

export default ProductHeader;