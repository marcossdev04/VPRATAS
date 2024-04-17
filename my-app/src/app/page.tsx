import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Infos } from "./components/Infos";
import { Highlights } from "./components/Highlights";
import { Selections } from "./components/Selections";
import { Chains } from "./components/Chains";
import { Bracelets } from "./components/Bracelets";
import { Earring } from "./components/Earring";

export default function Home() {
  return (
    <div>
      <Header />
      <Infos />
      <Selections />
      <div className="flex flex-col gap-3">
        <Highlights />
        <Chains />
        <Bracelets />
        <Earring />
      </div>
      <Footer />
    </div>
  )
}
