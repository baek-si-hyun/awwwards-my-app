import { ICoinHttpTickers } from "../../interface/icoin";

const TradePrice = ({
  coinName,
  tickerList,
}: {
  coinName: string;
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerList) {
    const price: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.trade_price.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;
    return <span>₩{price || 0}</span>;
  }
  return <></>;
};
export default TradePrice;
