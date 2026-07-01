import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Rent from "../pages/Rent";
import RefundPolicy from "../components/footer/RefundPolicy"
import InsurancePolicy from "../components/footer/InsurancePolicy"
import PrivacyPolicy from "../components/footer/PrivacyPolicy"
import TermsandCond from "../components/footer/TermsandCond"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/insurance" element={<InsurancePolicy />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsandCond />} />
    </Routes>
  );
}

export default AppRoutes;