import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi2";

type Props = {
    title: string;
    description: string;
};

const EmptyState = ({ title, description }: Props) => (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        <HiShoppingBag className="text-8xl text-green-700 sm:text-9xl" />

        <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-md text-gray-500 sm:text-lg">{description}</p>

        <Link
            href="/"
            className="mt-8 rounded-lg bg-green-700 px-6 py-3 font-medium text-white shadow-md shadow-green-900/20 transition-colors hover:bg-green-800"
        >
            Go Back to Homepage
        </Link>
    </div>
);

export default EmptyState;