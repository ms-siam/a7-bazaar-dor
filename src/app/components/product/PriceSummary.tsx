import { Product } from "@/app/types/product";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

const PriceSummary = ({ product }: { product: Product }) => {
    const lowest = Math.min(...product.markets.map((m) => m.min));
    const highest = Math.max(...product.markets.map((m) => m.max));

    const cards = [
        { label: "Lowest price", value: lowest, note: "Cheapest market", color: "text-green-700" },
        { label: "Highest price", value: highest, note: "Most expensive market", color: "text-red-600" },
        { label: "Average price", value: product.today, note: `Per ${product.unit}`, color: "text-green-700" },
    ];

    return (
        <section className="rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Price Summary</h2>

            <div className="grid gap-4 sm:grid-cols-3">
                {cards.map((c) => (
                    <div key={c.label} className="rounded-2xl border border-gray-200/70 px-6 py-5">
                        <p className="text-sm text-gray-600">{c.label}</p>
                        <p className={`mt-1 text-3xl font-extrabold ${c.color}`}>
                            {fmt(c.value)} <span className="text-base font-semibold">Taka</span>
                        </p>
                        <p className="mt-1 text-sm text-gray-600">{c.note}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PriceSummary;