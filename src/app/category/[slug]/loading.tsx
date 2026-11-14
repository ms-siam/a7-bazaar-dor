import {
    CategoryHeaderSkeleton,
    ProductGridSkeleton,
} from "@/app/components/shared/Skeletons";

export default function Loading() {
    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-6xl px-4 py-8">
                <CategoryHeaderSkeleton />
                <ProductGridSkeleton count={9} />
            </div>
        </main>
    );
}