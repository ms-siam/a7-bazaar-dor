import EmptyState from "@/app/components/shared/EmptyState";

export default function NotFound() {
    return (
        <main className="bg-[#f0f5f0]">
            <EmptyState
                title="Page not found"
                description="The product or page you are looking for has been removed or never existed."
            />
        </main>
    );
}