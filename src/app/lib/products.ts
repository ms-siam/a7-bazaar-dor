import { Product, ProductSummary } from "@/app/types/product";

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { next: { revalidate: 300 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
};

export const toSummary = (p: Product): ProductSummary => ({
    id: p.id,
    slug: p.slug,
    nameBn: p.nameBn,
    unit: p.unit,
    image: p.image,
    today: p.today,
    change: p.change,
});

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
    const products = await getProducts();
    return products.find((p) => p.slug === slug);
};