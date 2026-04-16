import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";

/**
 * Global site shell. Renders the global SiteHeader on every route except
 * the marketing home (`/`), which keeps its hero-embedded logo per brand spec.
 * The legacy /home3 page also opts out.
 */
const HEADERLESS_ROUTES = new Set<string>(["/", "/home3"]);

const SiteLayout = () => {
  const { pathname } = useLocation();
  const showHeader = !HEADERLESS_ROUTES.has(pathname);

  return (
    <div className="sobr-dark min-h-screen bg-sobr-root">
      {showHeader && <SiteHeader />}
      <Outlet />
    </div>
  );
};

export default SiteLayout;
