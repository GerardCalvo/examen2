import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import UseStatePage from "./pages/UseStatePage.tsx";
import UseEffectPage from "./pages/UseEffectPage.tsx";
import UseRefPage from "./pages/UseRefPage.tsx";
import RouterLinksPage from "./pages/RouterLinksPage.tsx";
import UseLocalStoragePage from "./pages/UseLocalStoragePage.tsx";

export default function App() {
  return (
    <div className="font-sans">
      <nav className="flex gap-3 p-3 border-b border-gray-300 flex-wrap">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Inici</Link>
        <Link to="/use-state" className="text-blue-600 hover:text-blue-800">useState</Link>
        <Link to="/use-effect" className="text-blue-600 hover:text-blue-800">useEffect</Link>
        <Link to="/use-ref" className="text-blue-600 hover:text-blue-800">useRef</Link>
        <Link to="/router-links" className="text-blue-600 hover:text-blue-800">Routes + Link</Link>
        <Link to="/use-local-storage" className="text-blue-600 hover:text-blue-800">useLocalStorage</Link>
      </nav>

      <main className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-ref" element={<UseRefPage />} />
          <Route path="/router-links" element={<RouterLinksPage />} />
          <Route path="/use-local-storage" element={<UseLocalStoragePage />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
