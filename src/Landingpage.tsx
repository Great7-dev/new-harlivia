import "./App.css";
import BentoGrid from "./components/bento-grid";
import FAQSection from "./components/faq";
import FeaturesGrid from "./components/features-grid";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero";
import ServiceCarousel from "./components/service-carousel";
import { ThemeProvider } from "./lib/theme-provider";

const Landingpage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Header />
        <HeroSection />
        <ServiceCarousel />
        <BentoGrid />
        <FeaturesGrid />
        <FAQSection />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Landingpage;
