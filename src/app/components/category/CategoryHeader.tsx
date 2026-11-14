import { Category } from "@/app/types/category";

const CategoryHeader = ({ category, count }: { category: Category; count: number }) => {
    return (
        <section className="mb-6 flex items-center gap-3 rounded-3xl border border-gray-200/70 bg-[#fafcf9] px-4 py-4 sm:gap-4 sm:px-6 sm:py-6">
            <span className="shrink-0 text-4xl sm:text-5xl">{category.icon}</span>
            <div className="min-w-0">
                <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {category.nameBn}
                </h1>
                <p className="text-sm text-gray-500 sm:text-base">
                    Today&apos;s prices and changes for {count} products
                </p>
            </div>
        </section>
    );
};

export default CategoryHeader;