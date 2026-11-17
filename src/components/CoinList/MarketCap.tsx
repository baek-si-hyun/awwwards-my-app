import { ICoinHttpTickers } from "../../interface/icoin";
import { formatWithCommas } from "../../utils/formatNumber";

function MarketCap({
  coinName,
  supply,
  marketCapKRW,
  tickerList,
}: {
  coinName: string;
  supply: number | null;
  marketCapKRW: number | null | undefined;
  tickerList: ICoinHttpTickers[];
}) {
  if (typeof marketCapKRW === "number" && marketCapKRW > 0) {
    return (
      <span>
        ₩{formatWithCommas(marketCapKRW.toFixed(0))}
      </span>
    );
  }
  if (supply !== null) {
    const price = tickerList.find((t) => t.market === coinName)?.trade_price || 0;
    const value = price * supply;
    if (value > 0)
      return (
        <span>
          ₩{formatWithCommas(value.toFixed(0))}
        </span>
      );
  }
  return <span>-</span>;
}

export default MarketCap;
