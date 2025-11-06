import { ICoinHttpTickers } from "../../interface/icoin";

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
        ₩{marketCapKRW.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    );
  }
  if (supply !== null) {
    const price = tickerList.find((t) => t.market === coinName)?.trade_price || 0;
    const value = price * supply;
    if (value > 0)
      return (
        <span>
          ₩{value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      );
  }
  return <span>-</span>;
}

export default MarketCap;
