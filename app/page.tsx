import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Shishas from "./components/Shishas";
import Flavors from "./components/Flavors";
import Drinks from "./components/Drinks";
import Beverages from "./components/Beverages";
import Beers from "./components/beers";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <Menu />

      <Shishas />

      <Flavors />

      <Drinks />

      <Beverages />

      <Beers />

      <Offers />

      <Contact />

      <Footer />

    </main>
  );
}