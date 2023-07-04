import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import { ICoinHistory } from "../../../../interface/interface";

const ApexChartDiv = styled.div`
  max-width: 100%;
  max-height: 61px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ApexChart = styled(ReactApexChart)`
  width: 164px;
  color: ${(props) =>
    props.change === "RISE"
      ? "#c84a31"
      : props.change === "FALL"
      ? " #1261c4"
      : "#222"};
  will-change: color;
`;
function Chart({
  history,
  change,
}: {
  history: ICoinHistory[];
  change: string;
}) {
  return (
    <>
      <ApexChartDiv>
        <ApexChart
          change={change}
          type="line"
          series={[
            {
              data:
                history.map((price) => ({
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
              change === "RISE"
                ? "#c84a31"
                : change === "EVEN"
                ? "#222"
                : "#1261c4",
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
    </>
  );
}
export default Chart;
