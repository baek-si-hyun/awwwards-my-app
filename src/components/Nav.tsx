import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { pathList } from "../atom";
import { IMainPosition, IRouterPosition } from "../interface/Interface";
import { DomApi } from "../services/DomApi";

const Navi = styled.div`
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
`;
const NavBoxLeft = styled.span`
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: #222222;
  color: #fff;
`;
const NavBoxInner = styled.div`
  display: flex;
`;

const NavBox = styled.ul`
  border-radius: 10px;
  display: flex;
  gap: 0.3rem;
  padding: 0.4rem;
  background-color: #3e3e3e;
`;

const NavItem = styled.li<{ mainPosition: IMainPosition }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4e4e4e;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-in-out 0.5s;
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

const RouterNavItem = styled.li<{ routerPosition: IRouterPosition }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4e4e4e;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-in-out 0.5s;
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
      props.routerPosition.about ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.routerPosition.about ? "#000" : "inherit")};
  }
`;
const Link = styled.a`
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const VisitedSite = styled.div`
  border: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
  border-radius: 10px;
  background-color: #ff602c;
  a {
    padding: 1.4rem 1rem;
  }
`;

function Nav() {
  const { pathname } = useRecoilValue(pathList);
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
    about: false,
  });
  const getElementPostion = () => {
    DomApi({ pathname, setMainPosition, setRouterPosition });
  };
  useEffect(() => {
    window.addEventListener("scroll", getElementPostion);
    return () => window.removeEventListener("scroll", getElementPostion);
  }, [mainPosition, routerPosition]);
  return (
    <Navi>
      <NavBoxLeft>W. Home</NavBoxLeft>
      <NavBoxInner>
        {pathname === "/" ? (
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
                About
              </Link>
            </NavItem>
            <NavItem mainPosition={mainPosition}>
              <Link href="#schedule" className="nav-item">
                Schedule
              </Link>
            </NavItem>
          </NavBox>
        ) : pathname === "/Netflix" ||
          "/Kanban" ||
          "/Coin" ||
          "/Myapp" ||
          "/Airbnb" ? (
          <>
            <NavBox onClick={navHandler}>
              <RouterNavItem routerPosition={routerPosition}>
                <Link href="#sotd" className="nav-item">
                  SOTD
                </Link>
              </RouterNavItem>
              <RouterNavItem routerPosition={routerPosition}>
                <Link href="#fontColor" className="nav-item">
                  Font & Color
                </Link>
              </RouterNavItem>
              <RouterNavItem routerPosition={routerPosition}>
                <Link href="#about" className="nav-item">
                  About
                </Link>
              </RouterNavItem>
            </NavBox>
            <VisitedSite>
              {pathname === "/Netflix" ? (
                <a href="https://baek-si-hyun.github.io/NFLXclone">
                  Visited Site
                </a>
              ) : pathname === "/Kanban" ? (
                <a href="https://baek-si-hyun.github.io/todo-list/">
                  Visited Site
                </a>
              ) : pathname === "/Coin" ? (
                <a href="https://baek-si-hyun.github.io/coin-chart-app/">
                  Visited Site
                </a>
              ) : pathname === "/Myapp" ? (
                <a href="https://baek-si-hyun.github.io/my-app/">
                  Visited Site
                </a>
              ) : pathname === "/Airbnb" ? (
                <a href="http://3.39.97.123/pages">Visited Site</a>
              ) : (
                <a href="https://baek-si-hyun.github.io/awwwards-my-app/">
                  Visited Site
                </a>
              )}
            </VisitedSite>
          </>
        ) : (
          ""
        )}
      </NavBoxInner>
    </Navi>
  );
}
export default Nav;
