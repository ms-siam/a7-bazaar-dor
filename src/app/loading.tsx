import { HeroSkeleton, SectionSkeleton } from "@/app/components/shared/Skeletons";

export default function Loading() {
    return (
        <main className="bg-[#f0f5f0]">
            <HeroSkeleton />
            <SectionSkeleton />
            <SectionSkeleton />
            <SectionSkeleton count={9} />
        </main>
    );
}