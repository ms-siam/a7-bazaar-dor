import { Suspense } from "react";
import PriceTicker from "./components/homepage/PriceTicker";
import '@/app/globals.css'
import Hero from "@/app/components/homepage/Hero";
import AllProducts from "@/app/components/homepage/AllProducts";
import PriceChangeSection from "./components/homepage/PriceChangeSection";

export default function Home() {
  return <>
    <Suspense
      fallback={<div className="h-13" />}
    >
      <PriceTicker />
    </Suspense>
    <Hero />
    <Suspense fallback={<div className="h-64" />}>
      <PriceChangeSection type="up" />
      <PriceChangeSection type="down" />
    </Suspense>

    <Suspense fallback={<div className="h-96" />}>
      <AllProducts />
    </Suspense>
  </>
}
