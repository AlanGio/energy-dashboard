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
          <XAxis dataKey="name" scale="band" />
          <YAxis unit="k" />

          <Tooltip />
          <Legend />

          {showItems.includes('usage') && (
            <Bar
              dataKey="usage"
              barSize={20}
              fill={color.MarketingSolar}
              name="Monthly Usage(kWh)"
            />
          )}

          {showItems.includes('demand') && (
            <Line
              type="monotone"
              dataKey="demand"
              stroke={color.Primary500}
              name="Monthly Demand(kW)"
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
