import { ICoinHttpTickers, ICoinSocketTickers } from "../../interface/icoin";

const AccTradeVolume24h = ({
  coinName,
  tickerList,
}: {
  coinName: string;
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerList) {
    const accTradeVolume24h: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.acc_trade_volume_24h.toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;

    return (
      <span>
        {accTradeVolume24h || 0} {coinName.substring(4) || ""}
      </span>
    );
  }
  return <></>;
};
export default AccTradeVolume24h;
