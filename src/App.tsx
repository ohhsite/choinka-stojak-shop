import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Admin = lazy(() => import("./pages/Admin"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Hurt = lazy(() => import("./pages/Hurt"));
const StojakMalyCzarny = lazy(() => import("./pages/StojakMalyCzarny"));
const StojakMalyZloty = lazy(() => import("./pages/StojakMalyZloty"));
const StojakDuzyCzarny = lazy(() => import("./pages/StojakDuzyCzarny"));
const StojakDuzyZloty = lazy(() => import("./pages/StojakDuzyZloty"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="loading">Ładowanie...</div>}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
