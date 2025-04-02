import "./App.css";
import BusinessSolutions from "./energy/src/components/business-solutions";
import FAQSection from "./energy/src/components/Faq/faq-section";
import FooterSection from "./energy/src/components/Footer/footer";
import Hero from "./energy/src/components/Hero/hero";
import Header from "./energy/src/components/Navbar/header";
import OilAndGasSection from "./energy/src/components/oil-and-gas";
import SolarEnergySection from "./energy/src/components/solar-energy";
import { ThemeProvider } from "./lib/theme-provider";

function LandingEnergy() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Header />
        <Hero />
        <OilAndGasSection />
        <SolarEnergySection />
        <BusinessSolutions />
        <FAQSection />
        <FooterSection />
      </>
    </ThemeProvider>
  );
}

export default LandingEnergy;
