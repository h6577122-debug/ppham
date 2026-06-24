import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/effects/CookieConsent";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import ContactPage from "@/pages/ContactPage";
import AppsPage from "@/pages/AppsPage";
import BlogPage from "@/pages/BlogPage";
import FAQPage from "@/pages/FAQPage";
import HirePage from "@/pages/HirePage";
import ToolsPage from "@/pages/ToolsPage";
import CookiesPage from "@/pages/CookiesPage";
import DisclaimerPage from "@/pages/DisclaimerPage";
import SitemapPage from "@/pages/SitemapPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ComingSoonPage from "@/pages/ComingSoonPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/apps" component={AppsPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/hire" component={HirePage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/coming-soon" component={ComingSoonPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <CookieConsent />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
