import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import HomeHeader from "./HomeHeader";

/**
 * Global site shell.
 * - `/` uses HomeHeader (transparent overlay, menu on left, big logo lives in hero).
 * - `/home3` opts out of any header (legacy).
 * - All other routes get the standard SiteHeader.
 */
const HOME_ROUTES = new Set<string>(["/"]);
const HEADERLESS_ROUTES = new Set<string>(["/home3"]);

const SiteLayout = () => {
  const { pathname } = useLocation();
  const isHome = HOME_ROUTES.has(pathname);
  const isHeaderless = HEADERLESS_ROUTES.has(pathname);

  return (
    <div className="sobr-dark min-h-screen bg-sobr-root">
      {isHome ? <HomeHeader /> : !isHeaderless && <SiteHeader />}
      <Outlet />
    </div>
  );
};

export default SiteLayout;
