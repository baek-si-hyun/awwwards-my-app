import { ReactElement } from "react";
import { ICoinHttpTickers } from "../../interface/icoin";
import { formatWithCommas } from "../../utils/formatNumber";

const AccTradePrice24h = ({
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
    )?.acc_trade_price_24h;
    const accTradePrice24h =
      value !== undefined ? formatWithCommas(value.toFixed(0)) : "";
    return <span>₩{accTradePrice24h || 0}</span>;
  }
  return <></>;
};
export default AccTradePrice24h;