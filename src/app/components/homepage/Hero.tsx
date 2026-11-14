import Image from "next/image";
import { Suspense } from "react";
import Time from "./Time";
import heroImg from "@/assets/bazar-hero.png";

const Hero = () => {
    return (
        <section className="mx-auto max-w-6xl px-4 py-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/70 bg-[#fafcf9] px-6 py-4 sm:px-10 md:py-6">
                <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
                    <div className="max-w-2xl">
                        <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                            <Suspense fallback={<span>Loading...</span>}>
                                <Time />
                            </Suspense>
                        </span>

                        <h2 className="mt-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                            Today&apos;s Market Prices at a Glance
                        </h2>

                        <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
                            Prices of rice, lentils, oil, vegetables, fish, meat, eggs
                            and spices - market-wise breakdown, average, lowest and
                            highest prices, and price changes, all in one place.
                        </p>

                        <a
                            href="#all-products"
                            className="mt-7 inline-block rounded-lg bg-green-700 px-6 py-3 font-medium text-white shadow-md shadow-green-900/20 transition-colors hover:bg-green-800"
                        >
                            View All Products
                        </a>
                    </div>

                    <div className="shrink-0">
                        <Image
                            src={heroImg}
                            alt="Basket of fresh vegetables"
                            priority
                            className="h-auto w-56 sm:w-72 lg:w-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;