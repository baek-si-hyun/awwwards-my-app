import styled from "styled-components";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ICoinHistory } from "../../interface/icoin";

const ChartDiv = styled.div`
  max-width: 100%;
  max-height: 61px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 164px;
`;

function Chart({
  history,
  change,
}: {
  history: ICoinHistory[];
  change: string;
}) {
  if (!history || history.length === 0) {
    return <ChartDiv />;
  }

  const chartData = history.map((price) => ({
    timestamp: price.timestamp,
    value: price.prev_closing_price,
  }));

  const strokeColor =
    change === "RISE" ? "#c84a31" : change === "EVEN" ? "#222" : "#1261c4";

  return (
    <ChartDiv>
      <ResponsiveContainer width="100%" height={61}>
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartDiv>
  );
}
export default Chart;
