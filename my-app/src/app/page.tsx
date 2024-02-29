import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Infos } from "./components/Infos";
import { Products } from "./components/Products";
import { Selections } from "./components/Selections";

export default function Home() {
  return (
    <div>
      <Header />
      <Infos />
      <Selections />
      <Products />
      <Footer />
    </div>
  )
}
