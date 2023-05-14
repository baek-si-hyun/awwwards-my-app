import { ICoinHttpTickers, ICoinSocketTickers } from "../../../../../interface/interface";
import { TdNomalDiv } from "./TbodyTr";

const AccTradeVolume24h = ({
  coinName,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const accTradeVolume24h: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.acc_trade_volume_24h.toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;

    return (
      <TdNomalDiv>
        <span>
          {accTradeVolume24h || 0} {coinName.substring(4) || ""}
        </span>
      </TdNomalDiv>
    );
  }
  return <TdNomalDiv></TdNomalDiv>;
};
export default AccTradeVolume24h;
