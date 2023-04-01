import { Dispatch, SetStateAction } from "react";
export interface ICoins {
  market: string;
  korean_name: string;
  english_name: string;
}
export interface ICoinTickers {
  market: string;
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  timestamp: number;
}
export interface ICoinListMerge {
  market: string;
  korean_name: string;
  english_name: string;
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  timestamp: number;
  historyArr : ICoinHistory[]
  supply: number,
}
export interface ICoinHistory {
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  candle_date_time_kst: string;
  candle_date_time_utc: string;
  change_price: number;
  change_rate: number;
  converted_trade_price: null;
  high_price: number;
  low_price: number;
  market: string;
  opening_price: number;
  prev_closing_price: number;
  timestamp: number;
  trade_price: number;
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
