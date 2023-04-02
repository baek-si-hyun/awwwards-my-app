import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ICoinListMerge } from "../../../../interface/interface";

const ApexChartDiv = styled.div`
  max-width: 100%;
  max-height: 53px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ApexChart = styled(ReactApexChart)`
  width: 164px;
  color: ${(props) =>
    props.change === "RISE"
      ? "#ea3943"
      : props.change === "FALL"
      ? " #16c784"
      : "#222"};
`;
function Chart({ data }: { data: ICoinListMerge }) {
  return (
    <ApexChartDiv>
      <ApexChart
        change={data.change}
        type="line"
        series={[
          {
            data:
              data.historyArr.map((price) => ({
                x: price.timestamp,
                y: price.prev_closing_price,
              })) ?? [],
          },
        ]}
        options={{
          chart: {
            type: "line",
            background: "transparent",
            zoom: { enabled: false },
            toolbar: {
              show: false,
            },
            animations: {
              enabled: false,
            },
          },
          grid: {
            show: false,
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          markers: { size: 0 },
          stroke: { curve: "smooth", width: 3 },
          colors: [
            data.change === "RISE"
              ? "#ea3943"
              : data.change === "EVEN"
              ? "#222"
              : "#16c784",
          ],
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            type: "datetime",
          },
          yaxis: { show: false },
        }}
      />
    </ApexChartDiv>
  );
}
export default Chart;
