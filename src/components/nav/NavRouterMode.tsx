import { IRouterPosition } from "../../interface/iproject";
import { NavBox, RouterNavItem, Link, VisitedSite } from "./common/navCommon";

function NavRouterMode({
  navHandler,
  routerPosition,
  pathname,
}: {
  pathname: string;
  navHandler: any;
  routerPosition: IRouterPosition;
}) {
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
        {pathname === "/visual-coin" ? (
          <a
            href="https://baek-si-hyun.github.io/visual-coin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/carrot-market" ? (
          <a
            href="https://carrot-market-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/awwwards" ? (
          <a
            href="https://drive.google.com/file/d/1JCT2iSVsRXvQD6mQYQDc-bEAjf2I85HV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/kanban" ? (
          <a
            href="https://baek-si-hyun.github.io/todo-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/coin" ? (
          <a
            href="https://baek-si-hyun.github.io/coin-chart-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/myapp" ? (
          <a
            href="https://baek-si-hyun.github.io/my-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/airbnb" ? (
          <a
            href="http://54.180.169.128/pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : null}
      </VisitedSite>
    </>
  );
}
export default NavRouterMode;
