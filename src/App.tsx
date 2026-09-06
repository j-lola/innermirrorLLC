import { useEffect } from "react";
import { BrowserRouter, Route, Routes, StaticRouter, useLocation } from "react-router-dom";
import { CirclePage } from "./pages/CirclePage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Disclaimer } from "./pages/Disclaimer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/discovery" element={<HomePage />} />
      <Route path="/circle" element={<CirclePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
}

export function App({ url }: { url?: string }) {
  if (url) {
    return (
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
