import styled, { css } from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IMainPosition, IRouterPosition } from "../../interface/iproject";
import { domApi } from "../../services/domApi";
import NavRouterMode from "./NavRouterMode";
import NavMainMode from "./NavMainMode";
import { useDispatch } from "react-redux";
import { resizeRedux } from "../../redux/resizeWidthSlice";
import MusicPlayBox from "../Music/MusicPlayBox";

const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  z-index: 999;
`;

const Navi = styled.nav`
  border-radius: 10px;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  ${common}
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
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    & {
      width: 100%;
      justify-content: center;
    }
  }
`;

const NavBoxInner = styled.div`
  display: flex;
`;
const BugerNav = styled.div`
  border-radius: 10px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  ${common}
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 0;
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
  @media (max-width: 768px) {
    & {
      flex-direction: column-reverse;
    }
  }
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
  // pathname 정규화 (대소문자 무시, 경로 prefix 제거)
  const normalizedPath = pathname.toLowerCase().replace(/^\/awwwards-my-app/, "").split("/").filter(Boolean).pop() || "";
  const projectRoutes = [
    "awwwards",
    "carrot-market",
    "project-house",
    "netflix",
    "kanban",
    "coin",
    "myapp",
    "airbnb",
  ];

  return (
    <>
      {pathname === "/" || pathname === "/awwwards-my-app/" || normalizedPath === "" ? (
        <NavMainMode navHandler={navHandler} mainPosition={mainPosition} />
      ) : projectRoutes.includes(normalizedPath) ? (
        <NavRouterMode
          pathname={pathname}
          navHandler={navHandler}
          routerPosition={routerPosition}
        />
      ) : null}
    </>
  );
}

function Nav() {
  const { pathname } = useLocation();
  const [resize, setResize] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [menuSwitch, setMenuSwitch] = useState(false);

  const bugerNavToggle = useCallback(() => {
    const currentResize = window.innerWidth;
    setResize((prev) => {
      if (prev === currentResize) return prev;
      return currentResize;
    });
    setMenuSwitch((prev) => !prev);
    dispatch(resizeRedux(currentResize));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", bugerNavToggle);
    return () => {
      window.removeEventListener("resize", bugerNavToggle);
    };
  }, [bugerNavToggle]);

  const navHandler = useCallback((e: any) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-item")) {
      const id = e.target.getAttribute("href");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  const [mainPosition, setMainPosition] = useState({
    home: true,
    projects: false,
    music: false,
    schedule: false,
  });

  const [routerPosition, setRouterPosition] = useState({
    sotd: false,
    fontColor: false,
    routerAbout: false,
  });

  const getElementPostion = useCallback(() => {
    domApi({ pathname, setMainPosition, setRouterPosition });
  }, [pathname, setMainPosition, setRouterPosition]);

  useEffect(() => {
    window.addEventListener("scroll", getElementPostion);
    return () => window.removeEventListener("scroll", getElementPostion);
  }, [getElementPostion]);

  return (
    <>
      {resize <= 1000 ? (
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
            <MusicPlayBox />
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
