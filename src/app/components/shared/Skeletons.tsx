import { Skeleton } from "@heroui/react";

export const ProductCardSkeleton = () => (
    <div className="rounded-2xl border border-gray-200/70 bg-[#fafcf9] p-5">
        <div className="flex items-center gap-4">
            <Skeleton className="h-14 w-14 shrink-0 rounded-xl" />
            <div className="w-full space-y-2">
                <Skeleton className="h-5 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-1/4 rounded-lg" />
            </div>
        </div>

        <Skeleton className="mt-4 h-3 w-24 rounded-lg" />
        <div className="mt-2 flex items-center justify-between">
            <Skeleton className="h-7 w-28 rounded-lg" />
            <Skeleton className="h-7 w-16 rounded-full" />
        </div>
    </div>
);

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
            <ProductCardSkeleton key={i} />
        ))}
    </div>
);

export const SectionSkeleton = ({ count = 6 }: { count?: number }) => (
    <section className="mx-auto w-full max-w-6xl px-4 py-6">
        <Skeleton className="mb-4 h-8 w-64 rounded-lg" />
        <ProductGridSkeleton count={count} />
    </section>
);

export const HeroSkeleton = () => (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between gap-10 rounded-[2rem] border border-gray-200/70 bg-[#fafcf9] px-6 py-10 sm:px-10 md:py-14">
            <div className="w-full max-w-2xl space-y-4">
                <Skeleton className="h-8 w-52 rounded-full" />
                <Skeleton className="h-10 w-4/5 rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4 rounded-lg" />
                <Skeleton className="mt-3 h-11 w-40 rounded-lg" />
            </div>
            <Skeleton className="hidden h-56 w-72 shrink-0 rounded-2xl md:block" />
        </div>
    </section>
);

export const CategoryHeaderSkeleton = () => (
    <div className="mb-6 flex items-center gap-4 rounded-3xl border border-gray-200/70 bg-[#fafcf9] px-6 py-6">
        <Skeleton className="h-14 w-14 rounded-xl" />
        <div className="w-full space-y-2">
            <Skeleton className="h-8 w-40 rounded-lg" />
            <Skeleton className="h-4 w-64 rounded-lg" />
        </div>
    </div>
);

export const DetailsSkeleton = () => (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8">
        <Skeleton className="h-4 w-56 rounded-lg" />

        <div className="flex items-center justify-between gap-6 rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
            <div className="flex w-full items-center gap-5">
                <Skeleton className="h-20 w-20 shrink-0 rounded-2xl" />
                <div className="w-full max-w-sm space-y-3">
                    <Skeleton className="h-8 w-3/4 rounded-lg" />
                    <Skeleton className="h-4 w-1/2 rounded-lg" />
                    <Skeleton className="h-4 w-2/3 rounded-lg" />
                </div>
            </div>
            <Skeleton className="hidden h-32 w-48 shrink-0 rounded-2xl sm:block" />
        </div>

        <div className="rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
            <Skeleton className="mb-4 h-6 w-40 rounded-lg" />
            <div className="grid gap-4 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-3 rounded-2xl border border-gray-200/70 px-6 py-5">
                        <Skeleton className="h-3 w-24 rounded-lg" />
                        <Skeleton className="h-8 w-32 rounded-lg" />
                        <Skeleton className="h-3 w-28 rounded-lg" />
                    </div>
                ))}
            </div>
        </div>

        <div className="rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
            <Skeleton className="mb-4 h-6 w-56 rounded-lg" />
            <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full rounded-xl" />
                ))}
            </div>
        </div>
    </div>
);