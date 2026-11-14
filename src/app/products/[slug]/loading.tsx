import { DetailsSkeleton } from "@/app/components/shared/Skeletons";

export default function Loading() {
    return (
        <main className="bg-[#f0f5f0]">
            <DetailsSkeleton />
        </main>
    );
}