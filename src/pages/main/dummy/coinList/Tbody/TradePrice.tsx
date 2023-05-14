import {
  ICoinHttpTickers,
  ICoinSocketTickers,
} from "../../../../../interface/interface";
import { TdNomalDiv } from "./TbodyTr";

const TradePrice = ({
  coinName,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const price: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.trade_price.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;

    return (
      <TdNomalDiv>
        <span>₩{price || 0}</span>
      </TdNomalDiv>
    );
  }
  return <TdNomalDiv></TdNomalDiv>;
};
export default TradePrice;
