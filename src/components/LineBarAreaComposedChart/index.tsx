import { color } from '../../config/theme';
import { Box, SxProps } from '@mui/material';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area
} from 'recharts';

const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x="30px"
        y="20px"
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export const LineBarAreaComposedChart = ({
  sx,
  data = [],
  showItems = ['usage', 'demand']
}: {
  sx?: SxProps;
  data: unknown[];
  showItems?: string[];
}) => {
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
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" tick={<CustomizedAxisTick />} />
          <YAxis unit="k" />

          <Tooltip />
          <Legend wrapperStyle={{ bottom: -20 }} />

          {showItems.includes('usage') && (
            <Bar
              dataKey="usage"
              barSize={20}
              fill={color.MarketingSolar}
              name="Usage"
            />
          )}

          {showItems.includes('demand') && (
            <Line
              type="monotone"
              dataKey="demand"
              stroke={color.Primary500}
              name="Demand"
            />
          )}

          {showItems.includes('temperature') && (
            <Area
              type="monotone"
              dataKey="temperature"
              fill={color.TransparenciesSecondaryMain25}
              stroke={color.TransparenciesSecondaryMain25}
              name="Temperature"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
