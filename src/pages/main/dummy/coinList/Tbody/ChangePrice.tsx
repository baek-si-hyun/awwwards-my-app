import {
  ICoinHttpTickers,
  ICoinSocketTickers,
} from "../../../../../interface/interface";
import { Icons, TdChangeDiv } from "./TbodyTr";

const ChangePrice = ({
  coinName,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerSocketData) {
    const changePrice: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.change_price.toString()
      .replace(/\B(?=(\d{3})+(!\d))/g, ",")!;
    const change: string = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      "EVEN"
    )?.change!;
    const changeRate: number = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,0
    )?.change_rate!;
    return (
      <TdChangeDiv change={change || "EVEN"}>
        <span>₩{changePrice || 0}</span>
        <span>
          {change === "EVEN" ? (
            <Icons className="material-symbols-outlined">
              check_indeterminate_small
            </Icons>
          ) : change === "RISE" ? (
            <Icons className="material-symbols-outlined">arrow_drop_up</Icons>
          ) : change === "FALL" ? (
            <Icons className="material-symbols-outlined">arrow_drop_down</Icons>
          ) : (
            <Icons className="material-symbols-outlined">trending_flat</Icons>
          )}
          {(changeRate * 100 || 0).toFixed(2)}%
        </span>
      </TdChangeDiv>
    );
  }
  return <TdChangeDiv change="EVEN"></TdChangeDiv>;
};
export default ChangePrice;
