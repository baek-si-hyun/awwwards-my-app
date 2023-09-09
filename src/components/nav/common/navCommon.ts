import styled from "styled-components";
import { IMainPosition, IRouterPosition } from "../../../interface/iproject";

export const NavBox = styled.ul`
  width: 100%;
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
    padding: 1.3rem 1rem;
  }
  @media (max-width: 650px) {
    & {
      margin-left: 0.1rem;
    }
  }
  @media (max-width: 320px) {
    & {
      width: 100%;
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
export const NavItem = styled(NavItemCommon)<{ mainPosition: IMainPosition }>`
  will-change: background-color, color;
  :nth-child(1) {
    background-color: ${(props) =>
      props.mainPosition.home ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.home ? "#000" : "inherit")};
  }
  :nth-child(2) {
    background-color: ${(props) =>
      props.mainPosition.projects ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.projects ? "#000" : "inherit")};
  }
  :nth-child(3) {
    background-color: ${(props) =>
      props.mainPosition.music ? "#d3d3d3" : "#3e3e3e"};
    color: ${(props) => (props.mainPosition.music ? "#000" : "inherit")};
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
