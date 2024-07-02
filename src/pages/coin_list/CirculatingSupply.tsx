import { ICoinHttpTickers, ICoinSocketTickers } from "../../interface/icoin";

const CirculatingSupply = ({
  coinName,
  supply,
  tickerList,
}: {
  coinName: string;
  supply: number;
  tickerList: ICoinHttpTickers[];
}): JSX.Element => {
  if (tickerList) {
    const price: number = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      0
    )?.trade_price!;

    return (
      <span>
        ₩
        {(supply * price || 0)
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    );
  }
  return <></>;
};
export default CirculatingSupply;
