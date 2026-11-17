import { ReactElement } from "react";
import { ICoinHttpTickers } from "../../interface/icoin";
import { formatWithCommas } from "../../utils/formatNumber";

const AccTradeVolume24h = ({
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
    )?.acc_trade_volume_24h;
    const accTradeVolume24h =
      value !== undefined ? formatWithCommas(value.toFixed(0)) : "";
    return (
      <span>
        {accTradeVolume24h || 0} {coinName.substring(4) || ""}
      </span>
    );
  }
  return <></>;
};
export default AccTradeVolume24h;