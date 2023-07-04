import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { resizeWidth } from "../../atom";
import { IMainPosition, IRouterPosition } from "../../interface/interface";
import { domApi } from "../../services/domApi";
import NavRouterMode from "./NavRouterMode";
import NavMainMode from "./NavMainMode";

const Navi = styled.div`
  border-radius: 10px;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.3rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 800px) {
    & {
      font-size: 0.7rem;
      padding: 0.3rem;
    }
  }
`;
const NavBoxLeft = styled.div`
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: #222222;
  color: #fff;
  white-space: nowrap;
  @media (max-width: 768px) {
    & {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 429px) {
    & {
      width: 100%;
      justify-content: center;
    }
  }
`;
const NavBoxInner = styled.div`
  display: flex;
`;

export const NavBox = styled.ul`
  border-radius: 10px;
  display: flex;
  gap: 0.3rem;
  padding: 0.4rem;
  background-color: #3e3e3e;
  @media (max-width: 800px) {
    & {
      padding: 0.3rem;
    }
  }
  @media (max-width: 320px) {
    & {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 70px;
    }
  }
`;
const NavItemCommon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4e4e4e;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-in-out 0.5s;
`;
export const NavItem = styled(NavItemCommon)<{ mainPosition: IMainPosition }>`
  will-change: background-color, color;
  :nth-child(1) {
    font-weight: 600;
    background-color: ${(props) =>
      props.mainPosition.header ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.header ? "#000" : "inherit")};
  }
  :nth-child(2) {
    background-color: ${(props) =>
      props.mainPosition.projects ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.projects ? "#000" : "inherit")};
  }
  :nth-child(3) {
    background-color: ${(props) =>
      props.mainPosition.about ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.about ? "#000" : "inherit")};
  }
  :nth-child(4) {
    background-color: ${(props) =>
      props.mainPosition.schedule ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.schedule ? "#000" : "inherit")};
  }
`;

export const RouterNavItem = styled(NavItemCommon)<{
  routerPosition: IRouterPosition;
}>`
  will-change: background-color, color;
  :nth-child(1) {
    font-weight: 600;
    background-color: ${(props) =>
      props.routerPosition.sotd ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.routerPosition.sotd ? "#000" : "inherit")};
  }
  :nth-child(2) {
    background-color: ${(props) =>
      props.routerPosition.fontColor ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.routerPosition.fontColor ? "#000" : "inherit")};
  }
  :nth-child(3) {
    background-color: ${(props) =>
      props.routerPosition.routerAbout ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) =>
      props.routerPosition.routerAbout ? "#000" : "inherit"};
  }
  @media (max-width: 320px) {
    & {
      height: 100%;
    }
  }
`;
export const Link = styled.a`
  padding: 1rem;
  white-space: nowrap;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 800px) {
    & {
      padding: 1.15rem 0.5rem;
    }
  }
  @media (max-width: 640px) {
    & {
      padding: 1.1rem 0.5rem;
    }
  }
`;
export const VisitedSite = styled.div`
  border: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
  border-radius: 10px;
  background-color: #ff602c;
  white-space: nowrap;
  a {
    padding: 1.4rem 1rem;
  }
  @media (max-width: 320px) {
    & {
      width: 100%;
    }
  }
`;

const BugerNav = styled.div`
  border-radius: 10px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.3rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 429px) {
    & {
      flex-direction: column;
    }
  }
  @media (max-width: 320px) {
    & {
      width: 100%;
    }
  }
`;
const BugerInner = styled.div<{ menuSwitch: boolean }>`
  display: ${(props) => (props.menuSwitch ? "flex" : "none")};
  will-change: display;
  @media (max-width: 320px) {
    & {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }
`;
const BugerLabel = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    display: block;
    width: 0.65rem;
    height: 1px;
    background: #fff;
    border-radius: 5px;
    margin: 1.5px 0;
  }
`;

function NavMode({
  navHandler,
  mainPosition,
  routerPosition,
  pathname,
}: {
  navHandler: any;
  mainPosition: IMainPosition;
  routerPosition: IRouterPosition;
  pathname: string;
}) {
  return (
    <>
      {pathname === "/" ? (
        <NavMainMode navHandler={navHandler} mainPosition={mainPosition} />
      ) : pathname === "/Netflix" ||
        "/Kanban" ||
        "/Coin" ||
        "/Myapp" ||
        "/Airbnb" ? (
        <NavRouterMode
          pathname={pathname}
          navHandler={navHandler}
          routerPosition={routerPosition}
        />
      ) : (
        ""
      )}
    </>
  );
}

function Nav() {
  const { pathname } = useLocation();
  const [resize, setResize] = useState(window.innerWidth);
  const setResizeWidth = useSetRecoilState(resizeWidth);
  const [menuSwitch, setMenuSwitch] = useState(false);

  const bugerNavToggle = useCallback(() => {
    setResize(window.innerWidth);
    setMenuSwitch(!menuSwitch);
    const resizeObject = { resizeWidth: resize };
    setResizeWidth(resizeObject);
  }, [menuSwitch, resize, setResizeWidth]);

  useEffect(() => {
    window.addEventListener("resize", bugerNavToggle);
    return () => {
      window.removeEventListener("resize", bugerNavToggle);
    };
  }, [bugerNavToggle, resize]);

  const navHandler = (e: any) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-item")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView();
    }
  };

  const [mainPosition, setMainPosition] = useState({
    header: true,
    projects: false,
    about: false,
    schedule: false,
  });

  const [routerPosition, setRouterPosition] = useState({
    sotd: false,
    fontColor: false,
    routerAbout: false,
  });

  useEffect(() => {
    const getElementPostion = () => {
      domApi({ pathname, setMainPosition, setRouterPosition });
    };
    window.addEventListener("scroll", getElementPostion);
    return () => window.removeEventListener("scroll", getElementPostion);
  }, [mainPosition, pathname, routerPosition]);

  return (
    <>
      {resize <= 768 ? (
        <BugerNav>
          <NavBoxLeft onClick={bugerNavToggle}>
            <span>B. Home</span>
            <BugerLabel>
              <span></span>
              <span></span>
              <span></span>
            </BugerLabel>
          </NavBoxLeft>
          <BugerInner menuSwitch={menuSwitch}>
            <NavMode
              navHandler={navHandler}
              mainPosition={mainPosition}
              routerPosition={routerPosition}
              pathname={pathname}
            />
          </BugerInner>
        </BugerNav>
      ) : (
        <Navi>
          <NavBoxLeft>B. Home</NavBoxLeft>
          <NavBoxInner>
            <NavMode
              navHandler={navHandler}
              mainPosition={mainPosition}
              routerPosition={routerPosition}
              pathname={pathname}
            />
          </NavBoxInner>
        </Navi>
      )}
    </>
  );
}
export default Nav;
