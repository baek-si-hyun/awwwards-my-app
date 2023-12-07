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
  trade_price: number;
  change: string;
  change_price: number;
  signed_change_price: number;
  change_rate: number;
  signed_change_rate: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
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
declare global {
  interface Window {
    TradingView: any;
  }
}
export interface ICoinListDataResult {
  data: ICoinListMerge[] | undefined;
}