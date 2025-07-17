// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Personal from "./components/Personal";
import NotFound from "./components/NotFound";
import Finance from "./components/Finance";
import CareerDevelopment from "./components/Career";
import BusinessDevelopment from "./components/Business";
import TechnologicalDevelopment from "./components/Technology";
import "./app.css";

export default function App() {
  return (
    <Router>
      <div className="bg-[#000000] overflow-hidden hide-scrollbar select-none w-[100vw] min-h-[100vh] text-white">
        <Header /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/personal-development" element={<Personal />} />
          <Route path="/finance-management" element={<Finance />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/business-development" element={<BusinessDevelopment />} />
          <Route path="/technology-development" element={<TechnologicalDevelopment />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}
