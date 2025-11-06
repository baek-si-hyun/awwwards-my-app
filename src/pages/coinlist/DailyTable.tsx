import { memo, useMemo } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchBithumbCandles } from "../../services/bithumbApi";
import { ICoinHistory } from "../../interface/icoin";
import DailyTableRow from "./components/DailyTableRow";

const TableWrap = styled.div`
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #0b0e11;
  }

  &::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-weight: 500;
  color: #e8ecef;

  th,
  td {
    padding: 12px 16px;
    font-size: 13px;
    text-align: left;
  }

  thead {
    background: #0b0e11;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #1e2329;

    th {
      font-weight: 600;
      font-size: 12px;
      color: #8c8d9a;
    }
  }

  tbody tr {
    border-bottom: 1px solid #1e2329;

    &:hover {
      background: #1e2329;
    }
  }

  td.r {
    text-align: right;
    font-weight: 500;
  }
`;

interface DailyTableProps {
  market: string;
  dailyData?: ICoinHistory[][];
}

function DailyTable({ market, dailyData }: DailyTableProps) {
  const { data } = useQuery<ICoinHistory[][]>(
    ["bithumb", "daily", market],
    () => fetchBithumbCandles([market]),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      enabled: !!market && !dailyData,
      initialData: dailyData,
    }
  );

  const finalData = dailyData || data;

  const rows = useMemo(() => {
    return (finalData?.[0] || []).slice().reverse();
  }, [finalData]);

  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <th>일자</th>
            <th className="r">종가(KRW)</th>
            <th className="r">전일대비</th>
            <th className="r">등락률</th>
            <th className="r">거래량</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <DailyTableRow key={r.timestamp} row={r} />
          ))}
        </tbody>
      </Table>
    </TableWrap>
  );
}

export default memo(DailyTable);

