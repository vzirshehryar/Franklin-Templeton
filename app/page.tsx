export const dynamic = "force-dynamic";

import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
