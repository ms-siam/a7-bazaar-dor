import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategories } from "@/app/lib/categories";
import { getProducts, toSummary } from "@/app/lib/products";
import CategoryHeader from "@/app/components/category/CategoryHeader";
import AllProductsGrid from "@/app/components/homepage/AllProductsGrid";
import EmptyState from "@/app/components/shared/EmptyState";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const categories = await getCategories();
    return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = (await getCategories()).find((c) => c.slug === slug);
    return { title: category ? `${category.nameBn} | BazaarDor` : "Category not found" };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    const [categories, products] = await Promise.all([getCategories(), getProducts()]);

    const category = categories.find((c) => c.slug === slug);
    if (!category) notFound();

    const items = products.filter((p) => p.category === slug).map(toSummary);

    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-6xl px-4 py-8">
                <CategoryHeader category={category} count={items.length} />

                {items.length === 0 ? (
                    <EmptyState
                        title="No products here yet"
                        description="This category doesn't have any products right now."
                    />
                ) : (
                    <AllProductsGrid key={slug} products={items} />
                )}
            </div>
        </main>
    );
}