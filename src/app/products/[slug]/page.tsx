import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa6";
import { getProductBySlug, getProducts } from "@/app/lib/products";
import ProductHeader from "@/app/components/product/ProductHeader";
import PriceSummary from "@/app/components/product/PriceSummary";
import MarketTable from "@/app/components/product/MarketTable";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    return { title: product ? `${product.nameBn} | BazaarDor` : "Product not found" };
}

export default async function ProductDetailsPage({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) notFound();

    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-6xl px-4 py-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-green-700">Home</Link>
                    <FaChevronRight className="text-[10px]" />
                    <Link href={`/category/${product.category}`} className="hover:text-green-700">
                        {product.categoryNameBn}
                    </Link>
                    <FaChevronRight className="text-[10px]" />
                    <span className="text-gray-900">{product.nameBn}</span>
                </nav>

                <ProductHeader product={product} />
                <PriceSummary product={product} />
                <MarketTable markets={product.markets} />
            </div>
        </main>
    );
}