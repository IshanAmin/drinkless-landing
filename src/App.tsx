import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/layout/SiteLayout";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TermsAndConditions from "./pages/TermsAndConditions";
import Support from "./pages/Support";
import AccountDeletion from "./pages/AccountDeletion";
import UnchainPrivacyPolicy from "./pages/UnchainPrivacyPolicy";
import TheEpidemic from "./pages/TheEpidemic";
import LearnHowToQuit from "./pages/LearnHowToQuit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/support" element={<Support />} />
            <Route path="/account-deletion" element={<AccountDeletion />} />
            <Route path="/unchain-privacy" element={<UnchainPrivacyPolicy />} />
            <Route path="/the-epidemic" element={<TheEpidemic />} />
            <Route path="/learn-how-to-quit-drinking" element={<LearnHowToQuit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
