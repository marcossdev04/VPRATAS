import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Infos } from "./components/Infos";
import { Highlights } from "./components/Highlights";
import { Selections } from "./components/Selections";

export default function Home() {
  return (
    <div>
      <Header />
      <Infos />
      <Selections />
      <div className="flex flex-col gap-3">
        <Highlights />
      </div>
      <Footer />
    </div>
  )
}
