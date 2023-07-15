import { SxProps, Box } from '@mui/material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

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
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
