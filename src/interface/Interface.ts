import { Dispatch, SetStateAction } from "react";

export interface ICoins {
  market: string;
  korean_name: string;
  english_name: string;
}
export interface ICoinHttpTickers {
  market: string;
  trade_price: number;
  change: string;
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
}
export interface ICoinSocketTickers {
  code: string;
  trade_price: number;
  change: string;
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
}
export interface ICoinListMerge {
  historyArr: ICoinHistory[];
  id: string;
  supply: number;
  market: string;
  korean_name: string;
  english_name: string;
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
  visited_airbnb_today: number;
  visited_airbnb_total: number;
  visited_coin_today: number;
  visited_coin_total: number;
  visited_kanban_today: number;
  visited_kanban_total: number;
  visited_myapp_today: number;
  visited_myapp_total: number;
  visited_netflix_today: number;
  visited_netflix_total: number;
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

export interface IFaqsLists {
  faqs_question: string;
  faqs_answer: string;
}
export interface IProjectsData {
  projects_code: string;
  projects_name: string;
  projects_date: string;
  projects_thumbnail: string;
  projects_logo: string;
  projects_by: string;
  projects_prev_img: string[];
  projects_fonts: string[];
  projects_colors: string[];
  projects_ko: string;
  projects_en: string;
}
export interface IProjectData {
  id: string;
  date: string;
  name: string;
  thumbnail: string;
  logo: string;
  by: string;
  imgs: string[]
  fonts: string[];
  colors: string[];
  ko: string;
  en: string;
}