import About from "./agric/src/components/About/about";
import FAQSection from "./agric/src/components/Faq/Faq";
import FooterSection from "./agric/src/components/Footer/footer";
import Hero from "./agric/src/components/Hero/hero";
import ValueProposition from "./agric/src/components/Value/value";
import Navbar from "./agric/src/components/Navbar/navbar";
import { ThemeProvider } from "./lib/theme-provider";

const LandingAgric = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Navbar />
        <Hero />
        <About />
        <ValueProposition />
        <FAQSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default LandingAgric;
