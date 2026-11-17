import { IRouterPosition, NavHandler } from "../../interface/iproject";
import { PROJECT_SITE_LINKS } from "../../constants/navData";
import { normalizePath } from "../../utils/path";
import { NavBox, RouterNavItem, Link, VisitedSite } from "./common/navCommon";

function NavRouterMode({
  navHandler,
  routerPosition,
  pathname,
}: {
  pathname: string;
  navHandler: NavHandler;
  routerPosition: IRouterPosition;
}) {
  const siteLink = PROJECT_SITE_LINKS[normalizePath(pathname)];

  return (
    <>
      <NavBox onClick={navHandler}>
        <RouterNavItem routerPosition={routerPosition}>
          <Link href="#sotd" className="nav-item">
            SOTD
          </Link>
        </RouterNavItem>
        <RouterNavItem routerPosition={routerPosition}>
          <Link href="#fontColor" className="nav-item">
            Font & Color
          </Link>
        </RouterNavItem>
        <RouterNavItem routerPosition={routerPosition}>
          <Link href="#routerAbout" className="nav-item">
            About
          </Link>
        </RouterNavItem>
      </NavBox>
      <VisitedSite>
        {siteLink ? (
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            Visited Site
          </a>
        ) : null}
      </VisitedSite>
    </>
  );
}
export default NavRouterMode;
