import * as React from "react";

interface CustomLegendPayload {
  payload?: Array<{ value: string; color?: string }>;
  verticalAlign?: "top" | "middle" | "bottom";
}

export const CustomLegend: React.FC<CustomLegendPayload> = ({ payload, verticalAlign = "bottom" }) => {
  if (!payload || payload.length === 0) return null;

  return (
    <ul className={`custom-legend ${verticalAlign}`}>
      {payload.map((item) => (
        <li key={item.value} style={{ color: item.color || "inherit" }}>
          {item.value}
        </li>
      ))}
    </ul>
  );
};
