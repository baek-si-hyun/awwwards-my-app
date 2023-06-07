import { IDomApi } from "../interface/interface";

export const domApi = ({
  pathname,
  setMainPosition,
  setRouterPosition,
}: IDomApi) => {
  if (pathname === "/") {
    const header = document.getElementById("header") as HTMLDivElement;
    const projects = document.getElementById("projects") as HTMLDivElement;
    const about = document.getElementById("about") as HTMLDivElement;
    const schedule = document.getElementById("schedule") as HTMLDivElement;
    const scrollY = window.scrollY;
    const headerPosition = Math.floor(
      scrollY + header?.getBoundingClientRect().top
    );
    const projectPosition = Math.floor(
      scrollY + projects?.getBoundingClientRect().top
    );
    const aboutPosition = Math.floor(
      scrollY + about?.getBoundingClientRect().top
    );
    const schedlulePosition = Math.floor(
      scrollY + schedule?.getBoundingClientRect().top
    );

    setMainPosition({
      header: scrollY >= headerPosition && scrollY < projectPosition,
      projects: scrollY >= projectPosition && scrollY < aboutPosition,
      about: scrollY >= aboutPosition && scrollY < schedlulePosition,
      schedule: scrollY >= schedlulePosition,
    });
  }
  if (
    pathname === "/Netflix" ||
    "/Kanban" ||
    "/Coin" ||
    "/Myapp" ||
    "/Airbnb"
  ) {
    const sotd = document.getElementById("sotd") as HTMLDivElement;
    const fontColor = document.getElementById("fontColor") as HTMLDivElement;
    const routerAbout = document.getElementById("routerAbout") as HTMLDivElement;
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
      routerAbout: scrollY >= aboutPosition - 300
    });
  }
};
