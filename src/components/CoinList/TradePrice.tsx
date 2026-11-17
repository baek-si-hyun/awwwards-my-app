import { ReactElement } from "react";
import { ICoinHttpTickers } from "../../interface/icoin";
import { formatWithCommas } from "../../utils/formatNumber";

const TradePrice = ({
  coinName,
  tickerList,
}: {
  coinName: string;
  tickerList: ICoinHttpTickers[];
}): ReactElement => {
  if (tickerList) {
    const value = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      0
    )?.trade_price;
    const price = value !== undefined ? formatWithCommas(value) : "";
    return <span>₩{price || 0}</span>;
  }
  return <></>;
};
export default TradePrice;
