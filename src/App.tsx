import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { About, CTAStrip, Hero, Philosophy, Services } from "./components/sections";
import { globalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
