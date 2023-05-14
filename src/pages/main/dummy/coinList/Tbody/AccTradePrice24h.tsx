import {
  ICoinHttpTickers,
  ICoinSocketTickers,
} from "../../../../../interface/interface";
import { TdNomalDiv } from "./TbodyTr";

const AccTradePrice24h = ({
  coinName,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const accTradePrice24h: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.acc_trade_price_24h.toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;

    return (
      <TdNomalDiv>
        <span>₩{accTradePrice24h || 0}</span>
      </TdNomalDiv>
    );
  }
  return <TdNomalDiv></TdNomalDiv>;
};

export default AccTradePrice24h;
