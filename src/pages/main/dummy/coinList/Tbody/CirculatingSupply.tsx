import {
  ICoinHttpTickers,
  ICoinSocketTickers,
} from "../../../../../interface/interface";
import { TdNomalDiv } from "./TbodyTr";

const CirculatingSupply = ({
  coinName,
  supply,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  supply: number;
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const price: number = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      0
    )?.trade_price!;

    return (
      <TdNomalDiv>
        <span>
          ₩
          {(supply * price || 0)
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </TdNomalDiv>
    );
  }
  return <TdNomalDiv></TdNomalDiv>;
};
export default CirculatingSupply;
