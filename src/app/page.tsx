import { Suspense } from "react";
import PriceTicker from "./components/homepage/PriceTicker";
import '@/app/globals.css'

export default function Home() {
  return <>
    <Suspense
      fallback={<div className="h-13 bg-[#f0f5f0]" />}
    >
      <PriceTicker />
    </Suspense>
  </>
}
