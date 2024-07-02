import {
  ICoinHistory,
  ICoinHttpTickers,
} from "../../interface/icoin";
import Chart from "./Chart";

const Chart200Days = ({
  coinName,
  history,
  tickerList,
}: {
  coinName: string;
  history: ICoinHistory[];
  tickerList: ICoinHttpTickers[];
}) => {
  if (tickerList) {
    const change: string = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      "EVEN"
    )?.change!;

    return <Chart history={history} change={change} />;
  }
  return <></>;
};

export default Chart200Days;
