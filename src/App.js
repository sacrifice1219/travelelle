import  NavBar  from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `nav, #hero, #services, #recommend, #testimonials, footer`, {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
