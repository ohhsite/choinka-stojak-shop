import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import FAQ from "./pages/FAQ";
import Hurt from "./pages/Hurt";
import StojakMalyCzarny from "./pages/StojakMalyCzarny";
import StojakMalyZloty from "./pages/StojakMalyZloty";
import StojakDuzyCzarny from "./pages/StojakDuzyCzarny";
import StojakDuzyZloty from "./pages/StojakDuzyZloty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/hurt" element={<Hurt />} />
          <Route path="/produkt/stojak-maly-czarny" element={<StojakMalyCzarny />} />
          <Route path="/produkt/stojak-maly-zloty" element={<StojakMalyZloty />} />
          <Route path="/produkt/stojak-duzy-czarny" element={<StojakDuzyCzarny />} />
          <Route path="/produkt/stojak-duzy-zloty" element={<StojakDuzyZloty />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
