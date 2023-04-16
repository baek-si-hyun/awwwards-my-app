import { Dispatch, SetStateAction } from "react";
export interface IProjectsData {
  id: string;
  date: string;
  name: string;
  thumbnail: string;
  logo: string;
  by: string;
  img: string[];
  fonts: string[];
  colors: string[];
  ko: string;
  en: string;
}
export interface ICoins {
  market: string;
  korean_name: string;
  english_name: string;
}
export interface ICoinTickers {
  market: string;
  trade_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
}
export interface ICoinListMerge {
  market: string;
  korean_name: string;
  english_name: string;
  trade_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
  historyArr: ICoinHistory[];
  supply: number;
}
export interface ICoinHistory {
  candle_date_time_kst: string;
  change_price: number;
  change_rate: number;
  high_price: number;
  low_price: number;
  market: string;
  opening_price: number;
  prev_closing_price: number;
  timestamp: number;
}
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
  routerAbout: boolean;
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

export interface IScheduleData {
  id: number;
  text: string[];
  absoluteBox: string;
  date: string;
}
