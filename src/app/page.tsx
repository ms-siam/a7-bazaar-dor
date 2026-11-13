import { Suspense } from "react";
import PriceTicker from "./components/homepage/PriceTicker";
import '@/app/globals.css'
import Hero from "@/app/components/homepage/Hero";
import AllProducts from "@/app/components/homepage/AllProducts";

export default function Home() {
  return <>
    <Suspense
      fallback={<div className="h-13 bg-[#f0f5f0]" />}
    >
      <PriceTicker />
    </Suspense>
    <Hero />
    <AllProducts />
  </>
}
