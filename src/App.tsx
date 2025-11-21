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
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminOrders = lazy(() => import("./pages/AdminOrders"));
const AdminOrderDetails = lazy(() => import("./pages/AdminOrderDetails"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Hurt = lazy(() => import("./pages/Hurt"));
const StojakMalyCzarny = lazy(() => import("./pages/StojakMalyCzarny"));
const StojakMalyZloty = lazy(() => import("./pages/StojakMalyZloty"));
const StojakDuzyCzarny = lazy(() => import("./pages/StojakDuzyCzarny"));
const StojakDuzyZloty = lazy(() => import("./pages/StojakDuzyZloty"));
const Koszyk = lazy(() => import("./pages/Koszyk"));
const KoszykDostawa = lazy(() => import("./pages/KoszykDostawa"));
// const Regulamin = lazy(() => import("./pages/Regulamin"));
// const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));

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
            {/* Restore original public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/hurt" element={<Hurt />} />
            <Route path="/produkt/stojak-maly-czarny" element={<StojakMalyCzarny />} />
            <Route path="/produkt/stojak-maly-zloty" element={<StojakMalyZloty />} />
            <Route path="/produkt/stojak-duzy-czarny" element={<StojakDuzyCzarny />} />
            <Route path="/produkt/stojak-duzy-zloty" element={<StojakDuzyZloty />} />
            
            {/* Koszyk routes */}
            <Route path="/koszyk" element={<Koszyk />} />
            <Route path="/koszyk/dostawa" element={<KoszykDostawa />} />
            
            {/* Admin panel routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/zamowienia" element={<AdminOrders />} />
            <Route path="/admin/zamowienia/:id" element={<AdminOrderDetails />} />
            
            {/* Routes for legal pages reverted to original (PDF link in footer) */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
