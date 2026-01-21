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
  // pathname 정규화 (대소문자 무시, 경로 prefix 제거)
  const normalizedPath = pathname.toLowerCase().replace(/^\/awwwards-my-app/, "").split("/").filter(Boolean).pop() || "";

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
        {normalizedPath === "project-house" ? (
          <a
            href="https://baek-si-hyun.github.io/project-house"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "carrot-market" ? (
          <a
            href="https://carrot-market-sooty.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "awwwards" ? (
          <a
            href="https://drive.google.com/file/d/1JCT2iSVsRXvQD6mQYQDc-bEAjf2I85HV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "kanban" ? (
          <a
            href="https://baek-si-hyun.github.io/todo-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "coin" ? (
          <a
            href="https://baek-si-hyun.github.io/coin-chart-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "myapp" ? (
          <a
            href="https://baek-si-hyun.github.io/my-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visited Site
          </a>
        ) : normalizedPath === "airbnb" ? (
          <a
            href="https://drive.google.com/file/d/1I445jnO3_rn8myR253FWO54psB6kRiuO/view?usp=sharing"
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
