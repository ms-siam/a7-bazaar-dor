import { Product } from "@/app/types/product";

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

const MarketTable = ({ markets }: { markets: Product["markets"] }) => {
    const rows = markets
        .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
        .sort((a, b) => a.avg - b.avg);

    return (
        <section className="mt-6 rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Today&apos;s Price by Market</h2>

            <div className="overflow-x-auto rounded-2xl border border-gray-200/70">
                <table className="w-full min-w-160 text-left">
                    <thead>
                        <tr className="text-sm text-gray-500">
                            <th className="px-5 py-4 font-medium">Market</th>
                            <th className="px-5 py-4 font-medium">Division</th>
                            <th className="px-5 py-4 text-right font-medium">Lowest</th>
                            <th className="px-5 py-4 text-right font-medium">Highest</th>
                            <th className="px-5 py-4 text-right font-medium">Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr
                                key={`${row.market}-${row.division}`}
                                className={`border-t border-gray-200 ${i % 2 === 1 ? "bg-[#f0f5f0]/70" : ""}`}
                            >
                                <td className="px-5 py-4 text-gray-900">{row.market}</td>
                                <td className="px-5 py-4 text-gray-900">{row.division}</td>
                                <td className="px-5 py-4 text-right text-gray-900">{fmt(row.min)} Taka</td>
                                <td className="px-5 py-4 text-right text-gray-900">{fmt(row.max)} Taka</td>
                                <td className="px-5 py-4 text-right font-bold text-gray-900">{fmt(row.avg)} Taka</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MarketTable;