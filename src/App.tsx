import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import StrokeRecovery from "./pages/services/StrokeRecovery";
import EpilepsyCare from "./pages/services/EpilepsyCare";
import ParkinsonsManagement from "./pages/services/ParkinsonsManagement";
import Neurodiagnostics from "./pages/services/Neurodiagnostics";
import PediatricNeurology from "./pages/services/PediatricNeurology";
import NeurocriticalCare from "./pages/services/NeurocriticalCare";
import CervicalSpondylosis from "./pages/health-conditions/CervicalSpondylosis";
import Stroke from "./pages/health-conditions/Stroke";
import EpilepsyAndSeizureDisorders from "./pages/health-conditions/EpilepsyAndSeizureDisorders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/health-conditions/cervical-spondylosis" element={<CervicalSpondylosis />} />
            <Route path="/health-conditions/stroke" element={<Stroke />} />
            <Route path="/health-conditions/epilepsy-seizure-disorders" element={<EpilepsyAndSeizureDisorders />} />
            <Route path="/services/stroke-recovery" element={<StrokeRecovery />} />
            <Route path="/services/epilepsy-care" element={<EpilepsyCare />} />
            <Route path="/services/parkinsons-management" element={<ParkinsonsManagement />} />
            <Route path="/services/neurodiagnostics" element={<Neurodiagnostics />} />
            <Route path="/services/pediatric-neurology" element={<PediatricNeurology />} />
            <Route path="/services/neurocritical-care" element={<NeurocriticalCare />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
