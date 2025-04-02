import "./App.css";
import FAQSection from "./cargo/src/components/Faq/faq";
import Features from "./cargo/src/components/features";
import FooterSection from "./cargo/src/components/Footer/footer";
import Hero from "./cargo/src/components/Hero/hero";
import Header from "./cargo/src/components/Navbar/header";
import ValueProposition from "./cargo/src/components/valueprop";
import { ThemeProvider } from "./lib/theme-provider";

export default function LandingCargo() {
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
