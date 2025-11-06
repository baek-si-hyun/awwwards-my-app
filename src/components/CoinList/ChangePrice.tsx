import styled from "styled-components";
import { ICoinHttpTickers } from "../../interface/icoin";

const TdChangeDiv = styled.div<{ change: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 3px;
  color: ${(props) =>
    props.change === "RISE"
      ? "#c84a31"
      : props.change === "FALL"
      ? "#1261c4"
      : "#222222"};
`;

const Icons = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;

const ChangePrice = ({
  coinName,
  tickerList,
}: {
  coinName: string;
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerList) {
    const changePrice: string = tickerList
      .find((ticker) => ticker.market === coinName && ticker, 0)
      ?.change_price.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")!;
    const change: string = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      "EVEN"
    )?.change!;
    const changeRate: number = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      0
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
