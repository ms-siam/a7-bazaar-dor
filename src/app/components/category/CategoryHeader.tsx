import { Category } from "@/app/types/category";

const CategoryHeader = ({ category, count }: { category: Category; count: number }) => {
    return (
        <section className="mb-6 flex items-center gap-4 rounded-3xl border border-gray-200/70 bg-[#fafcf9] px-6 py-6">
            <span className="text-5xl">{category.icon}</span>
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900">{category.nameBn}</h1>
                <p className="text-gray-500">
                    Today&apos;s prices and changes for {count} products
                </p>
            </div>
        </section>
    );
};

export default CategoryHeader;