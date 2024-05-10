import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OxAuth from "./components/OxAuth";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </>
  );
}
