import { ICoinHttpTickers, ICoinSocketTickers } from "../../interface/icoin";

const AccTradePrice24h = ({
  coinName,
  // tickerSocketData,
  tickerList,
}: {
  coinName: string;
  // tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerList) {
    const accTradePrice24h: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.acc_trade_price_24h.toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;
    return <span>₩{accTradePrice24h || 0}</span>;
  }
  return <></>;
};
export default AccTradePrice24h;