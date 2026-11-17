// pathname 정규화: 대소문자 무시, 배포 경로(/awwwards-my-app) 접두어 제거, 마지막 조각만.
export const normalizePath = (pathname: string) =>
  pathname
    .toLowerCase()
    .replace(/^\/awwwards-my-app/, "")
    .split("/")
    .filter(Boolean)
    .pop() || "";

export const isHomePath = (pathname: string) =>
  pathname === "/" ||
  pathname === "/awwwards-my-app/" ||
  normalizePath(pathname) === "";
