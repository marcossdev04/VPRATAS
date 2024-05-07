'use client'
import { Infos } from "./components/Infos";
import { Selections } from "./components/Selections";
import { Chains } from "./components/Chains";
import { Bracelets } from "./components/Bracelets";
import { Earring } from "./components/Earring";
import { Banner } from "./components/Banner";
import { Highlights } from "./components/Highlights";
export default function Home() {
  return (
    <div className="text-white">
      <div>
        <Infos />
        <Banner />
        <Selections />
      </div>
      <div className="flex flex-col gap-3 mobile:w-[85%] mobile:m-auto">
        <Highlights />
        <Chains />
        <Bracelets />
        <Earring />
      </div>
    </div>
  )
}
