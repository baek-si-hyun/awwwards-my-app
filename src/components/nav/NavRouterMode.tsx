import { IRouterPosition } from "../../interface/interface";
import { NavBox, RouterNavItem, Link, VisitedSite } from "./Nav";

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
        {pathname === "/Netflix" ? (
          <a
            href="https://baek-si-hyun.github.io/NFLXclone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/Kanban" ? (
          <a
            href="https://baek-si-hyun.github.io/todo-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/Coin" ? (
          <a
            href="https://baek-si-hyun.github.io/coin-chart-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/Myapp" ? (
          <a
            href="https://baek-si-hyun.github.io/my-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : pathname === "/Airbnb" ? (
          <a
            href="http://54.180.169.128/pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : (
          <a
            href="https://baek-si-hyun.github.io/awwwards-my-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        )}
      </VisitedSite>
    </>
  );
}
export default NavRouterMode;
