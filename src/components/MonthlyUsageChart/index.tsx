import { Box, SxProps } from "@mui/material";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "11/01/2022",
    uv: 590,
    pv: 800,
  },
  {
    name: "11/02/2022",
    uv: 868,
    pv: 967,
  },
  {
    name: "11/03/2022",
    uv: 1397,
    pv: 1098,
  },
  {
    name: "11/04/2022",
    uv: 1480,
    pv: 1200,
  },
  {
    name: "11/05/2022",
    uv: 1520,
    pv: 1108,
  },
  {
    name: "11/06/2022",
    uv: 1400,
    pv: 680,
  },
  {
    name: "11/07/2022",
    uv: 1900,
    pv: 500,
  },
  {
    name: "11/08/2022",
    uv: 1200,
    pv: 600,
  },
  {
    name: "11/09/2022",
    uv: 1100,
    pv: 730,
  },
  {
    name: "11/10/2022",
    uv: 200,
    pv: 800,
  },
  {
    name: "11/11/2022",
    uv: 900,
    pv: 480,
  },
];

export const MonthlyUsageChart = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box sx={sx}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
