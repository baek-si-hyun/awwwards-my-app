import { IMainPosition, IRouterPosition, NavHandler } from "../../interface/iproject";
import { NAV_PROJECT_ROUTES } from "../../constants/navData";
import { isHomePath, normalizePath } from "../../utils/path";
import NavMainMode from "./NavMainMode";
import NavRouterMode from "./NavRouterMode";

// 홈이면 섹션 내비, 상세(내비 대상 프로젝트)면 상세 내비, 그 밖엔 아무것도 그리지 않는다.
function NavMode({
  navHandler,
  mainPosition,
  routerPosition,
  pathname,
}: {
  navHandler: NavHandler;
  mainPosition: IMainPosition;
  routerPosition: IRouterPosition;
  pathname: string;
}) {
  if (isHomePath(pathname)) {
    return <NavMainMode navHandler={navHandler} mainPosition={mainPosition} />;
  }
  if (NAV_PROJECT_ROUTES.includes(normalizePath(pathname))) {
    return (
      <NavRouterMode
        pathname={pathname}
        navHandler={navHandler}
        routerPosition={routerPosition}
      />
    );
  }
  return null;
}

export default NavMode;
