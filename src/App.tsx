import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./Landingpage";
import LandingPageAgric from "./agric/src/components/LandingPage";
import LandingPageCargo from "./cargo/src/App";
import LandingPageProperties from "./properties/src/App";
import LandingPageEnergy from "./energy/src/App";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when route changes
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/agric" element={<LandingPageAgric />} />
          <Route path="/cargo" element={<LandingPageCargo />} />
          <Route path="/properties" element={<LandingPageProperties />} />
          <Route path="/energy" element={<LandingPageEnergy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
