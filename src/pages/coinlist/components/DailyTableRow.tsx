import { memo, useMemo } from "react";
import { ICoinHistory } from "../../../interface/icoin";

const COLOR_UP = "#c84a31";
const COLOR_DOWN = "#1261c4";

const formatDate = (date: Date): string => {
  const mm = `${date.getMonth() + 1}`.padStart(2, "0");
  const dd = `${date.getDate()}`.padStart(2, "0");
  return `${mm}.${dd}`;
};

interface DailyTableRowProps {
  row: ICoinHistory;
}

function DailyTableRow({ row }: DailyTableRowProps) {
  const dateStr = useMemo(() => formatDate(new Date(row.timestamp)), [row.timestamp]);
  
  const { delta, pct, color } = useMemo(() => {
    const delta = row.change_price;
    const pct = row.change_rate * 100;
    const color = delta > 0 ? COLOR_UP : delta < 0 ? COLOR_DOWN : "#8c8d9a";
    return { delta, pct, color };
  }, [row.change_price, row.change_rate]);

  const formattedPrice = useMemo(
    () => row.prev_closing_price.toLocaleString(),
    [row.prev_closing_price]
  );
  const formattedDelta = useMemo(() => delta.toLocaleString(), [delta]);
  const formattedPct = useMemo(() => `${pct.toFixed(2)}%`, [pct]);
  const formattedVolume = useMemo(
    () => (row.volume ?? 0).toLocaleString(),
    [row.volume]
  );

  return (
    <tr>
      <td>{dateStr}</td>
      <td className="r" style={{ color }}>
        {formattedPrice}
      </td>
      <td className="r" style={{ color }}>
        {formattedDelta}
      </td>
      <td className="r" style={{ color }}>
        {formattedPct}
      </td>
      <td className="r">{formattedVolume}</td>
    </tr>
  );
}

export default memo(DailyTableRow);

