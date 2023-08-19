import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IMainPosition, IRouterPosition } from "../../interface/iproject";
import { domApi } from "../../services/domApi";
import NavRouterMode from "./NavRouterMode";
import NavMainMode from "./NavMainMode";
import { useDispatch } from "react-redux";
import { resizeRedux } from "../../redux/slices/resizeWidthSlice";
import MusicPlayBox from "../music_player/MusicPlayBox";

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
  z-index: 999;
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
  gap: 0.3rem;
  padding: 0.3rem;
  font-size: 0.9rem;
  color: #a7a79d;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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
  const dispatch = useDispatch();
  const [menuSwitch, setMenuSwitch] = useState(false);

  const bugerNavToggle = useCallback(() => {
    const currentResize = window.innerWidth;
    setResize(currentResize);
    setMenuSwitch(!menuSwitch);
    dispatch(resizeRedux(currentResize));
  }, [menuSwitch, dispatch]);

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
