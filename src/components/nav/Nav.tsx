import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { NavHandler } from "../../interface/iproject";
import { domApi } from "../../utils/domApi";
import NavMode from "./NavMode";
import { useDispatch } from "react-redux";
import { resizeRedux } from "../../redux/resizeWidthSlice";
import MusicPlayBox from "../Music/MusicPlayBox";
import {
  Navi,
  NavBoxLeft,
  NavBoxInner,
  BugerNav,
  BugerInner,
  BugerLabel,
} from "./Nav.styles";

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

  const navHandler = useCallback<NavHandler>((e) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.classList.contains("nav-item")) {
      const id = target.getAttribute("href");
      const element = id ? document.querySelector(id) : null;
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
