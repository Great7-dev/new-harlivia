import "./App.css";
import { ThemeProvider } from "./lib/theme-provider";
import FAQSection from "./properties/src/components/Faq/faq-section";
import Features from "./properties/src/components/Features/Features";
import ValueProposition from "./properties/src/components/Features/SecondFeatures";
import FooterSection from "./properties/src/components/Footer/Footer";
import Hero from "./properties/src/components/Hero/Hero";
import Header from "./properties/src/components/Navbar/Header";

export default function LandingProperties() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Hero />
        <Features />
        <ValueProposition />
        <FAQSection />
        <FooterSection />
      </main>
    </ThemeProvider>
  );
}
