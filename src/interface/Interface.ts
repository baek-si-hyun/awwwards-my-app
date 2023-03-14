import { Dispatch, SetStateAction } from "react";

export interface IGetVisitedObject {
  visited: IVisited;
}
export interface IVisited {
  airbnbToday: number;
  airbnbTotal: number;
  coinToday: number;
  coinTotal: number;
  kanbanToday: number;
  kanbanTotal: number;
  myappToday: number;
  myappTotal: number;
  netflixToday: number;
  netflixTotal: number;
}
export interface IResize {
  resizeWidth: number;
}
export interface IPathname {
  pathname: string;
}
export interface IMainPosition {
  header: boolean;
  projects: boolean;
  about: boolean;
  schedule: boolean;
}
export interface IRouterPosition {
  sotd: boolean;
  fontColor: boolean;
  about: boolean;
}
export interface IDomApi {
  pathname: string;
  setMainPosition: Dispatch<SetStateAction<IMainPosition>>;
  setRouterPosition: Dispatch<SetStateAction<IRouterPosition>>;
}
export interface IFaqs {
  id: string;
  value: boolean;
}
export interface Data {
  id: number;
  img: string;
  tittle: string;
  artist: string;
  album: string;
}

interface IrowDataArr {
  num: number;
  text: string;
}
export interface IrowData {
  id: number;
  arr: IrowDataArr[];
}
export interface IAbsoluteBoxData {
  id: number;
  text: string;
}
