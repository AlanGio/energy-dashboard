import { color } from '../../config/theme';
import { SxProps, Box } from '@mui/material';
import { ResponsiveContainer, Area, ComposedChart } from 'recharts';

export const TinyLineChart = ({
  sx,
  data = []
}: {
  sx?: SxProps;
  data: unknown[];
}) => {
  return (
    <Box sx={sx}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart width={300} height={100} data={data}>
          <Area
            type="monotone"
            dataKey="usage"
            fill={color.MarketingSolar}
            stroke={color.Primary500}
            strokeWidth={2}
            name="Temperature"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
