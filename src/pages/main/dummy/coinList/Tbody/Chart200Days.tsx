import {
  ICoinHistory,
  ICoinHttpTickers,
  ICoinSocketTickers,
} from "../../../../../interface/interface";
import Chart from "../Chart";

const Chart200Days = ({
  coinName,
  history,
  tickerSocketData,
  tickerList,
}: {
  coinName: string;
  history: ICoinHistory[];
  tickerSocketData: ICoinSocketTickers[];
  tickerList: ICoinHttpTickers[];
}) => {
  if (tickerSocketData) {
    const change: string = tickerList.find(
      (ticker) => ticker.market === coinName && ticker,
      "EVEN"
    )?.change!;

    return <Chart history={history} change={change} />;
  }
  return <></>;
};

export default Chart200Days;
