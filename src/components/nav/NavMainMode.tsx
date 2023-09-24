import { IMainPosition } from "../../interface/iproject";
import { NavBox, NavItem, Link } from "./common/navCommon";

function NavMainMode({
  navHandler,
  mainPosition,
}: {
  navHandler: any;
  mainPosition: IMainPosition;
}) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavBox onClick={navHandler}>
      <NavItem mainPosition={mainPosition}>
        <Link href="#home" className="nav-item" onClick={scrollToTop}>
          Home
        </Link>
      </NavItem>
      <NavItem mainPosition={mainPosition}>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
      </NavItem>
      <NavItem mainPosition={mainPosition}>
        <Link href="#music" className="nav-item">
          Music
        </Link>
      </NavItem>
      <NavItem mainPosition={mainPosition}>
        <Link href="#schedule" className="nav-item">
          Schedule
        </Link>
      </NavItem>
    </NavBox>
  );
}
export default NavMainMode;
