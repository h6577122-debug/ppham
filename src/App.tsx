import { Switch, Route, Router as WouterRouter } from "wouter";
import { CookieConsent } from "@/components/effects/CookieConsent";
import { RevenueTicker } from "@/components/effects/RevenueTicker";
import { SocialProofBubbles } from "@/components/effects/SocialProofBubbles";
import { CVDownloadFAB } from "@/components/effects/CVDownloadFAB";
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
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <RevenueTicker />
      <SocialProofBubbles />
      <CVDownloadFAB />
      <Router />
      <CookieConsent />
    </WouterRouter>
  );
}

export default App;
