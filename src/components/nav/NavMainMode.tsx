import { IMainPosition } from "../../interface/iproject";
import { NavBox, NavItem, Link } from "./common/navCommon";

function NavMainMode({
  navHandler,
  mainPosition,
}: {
  navHandler: any;
  mainPosition: IMainPosition;
}) {
  return (
    <NavBox onClick={navHandler}>
      <NavItem mainPosition={mainPosition}>
        <Link href="#header" className="nav-item">
          Home
        </Link>
      </NavItem>
      <NavItem mainPosition={mainPosition}>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
      </NavItem>
      <NavItem mainPosition={mainPosition}>
        <Link href="#about" className="nav-item">
          Dummy
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
