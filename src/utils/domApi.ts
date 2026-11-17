import { IDomApi } from "../interface/iproject";
import { NAV_PROJECT_ROUTES } from "../constants/navData";
import { isHomePath, normalizePath } from "./path";

export const domApi = ({
  pathname,
  setMainPosition,
  setRouterPosition,
}: IDomApi) => {

  if (isHomePath(pathname)) {
    const projects = document.getElementById("projects") as HTMLDivElement;
    const music = document.getElementById("music") as HTMLDivElement;
    const schedule = document.getElementById("schedule") as HTMLDivElement;
    const scrollY = window.scrollY;
    const projectPosition = Math.floor(
      scrollY + projects?.getBoundingClientRect().top
    );
    const musicPosition = Math.floor(
      scrollY + music?.getBoundingClientRect().top
    );
    const schedlulePosition = Math.floor(
      scrollY + schedule?.getBoundingClientRect().top
    );
    setMainPosition({
      home: scrollY < projectPosition,
      projects: scrollY >= projectPosition && scrollY < musicPosition,
      music: scrollY >= musicPosition && scrollY < schedlulePosition,
      schedule: scrollY >= schedlulePosition,
    });
  }
  if (NAV_PROJECT_ROUTES.includes(normalizePath(pathname))) {
    const sotd = document.getElementById("sotd") as HTMLDivElement;
    const fontColor = document.getElementById("fontColor") as HTMLDivElement;
    const routerAbout = document.getElementById(
      "routerAbout"
    ) as HTMLDivElement;
    const scrollY = window.scrollY;

    const sotdPosition = Math.floor(
      scrollY + sotd?.getBoundingClientRect().top
    );
    const fontColorPosition = Math.floor(
      scrollY + fontColor?.getBoundingClientRect().top
    );
    const aboutPosition = Math.floor(
      scrollY + routerAbout?.getBoundingClientRect().top
    );

    setRouterPosition({
      sotd: scrollY >= sotdPosition && scrollY < fontColorPosition,
      fontColor: scrollY >= fontColorPosition && scrollY < aboutPosition - 300,
      routerAbout: scrollY >= aboutPosition - 300,
    });
  }
};
