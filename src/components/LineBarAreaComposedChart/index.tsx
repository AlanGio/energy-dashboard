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
  ResponsiveContainer
} from 'recharts';

/*
const data = [
  {
    name: '11/01/2022',
    usage: 590,
    demand: 800
  },
  {
    name: '11/02/2022',
    usage: 868,
    demand: 967
  },
  {
    name: '11/03/2022',
    usage: 1397,
    demand: 1098
  },
  {
    name: '11/04/2022',
    usage: 1480,
    demand: 1200
  },
  {
    name: '11/05/2022',
    usage: 1520,
    demand: 1108
  },
  {
    name: '11/06/2022',
    usage: 1400,
    demand: 680
  },
  {
    name: '11/07/2022',
    usage: 1900,
    demand: 500
  },
  {
    name: '11/08/2022',
    usage: 1200,
    demand: 600
  },
  {
    name: '11/09/2022',
    usage: 1100,
    demand: 730
  },
  {
    name: '11/10/2022',
    usage: 200,
    demand: 800
  },
  {
    name: '11/11/2022',
    usage: 900,
    demand: 480
  }
];
*/

export const LineBarAreaComposedChart = ({
  sx,
  data = []
}: {
  sx?: SxProps;
  data: unknown[];
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
          <Bar
            dataKey="usage"
            barSize={20}
            fill={color.MarketingSolar}
            name="Monthly Usage(kWh)"
          />
          <Line
            type="monotone"
            dataKey="demand"
            stroke={color.Primary500}
            name="Monthly Demand(kW)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};
