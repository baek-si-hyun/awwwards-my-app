import React, { useMemo } from "react";

function Sparkline({ data, width = 140, height = 40, color = "#0062DF" }: { data: number[]; width?: number; height?: number; color?: string }) {
  const points = useMemo(() => {
    if (!data || data.length < 2) return "";
    const min = Math.min(...data);
    const max = Math.max(...data);
    const span = Math.max(1, max - min);
    const step = width / (data.length - 1);
    return data
      .map((v, i) => {
        const x = i * step;
        const y = height - ((v - min) / span) * (height - 2) - 1;
        return `${x},${y}`;
      })
      .join(" ");
  }, [data, width, height]);

  if (!data || data.length < 2) return null;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
    </svg>
  );
}

export default Sparkline;

