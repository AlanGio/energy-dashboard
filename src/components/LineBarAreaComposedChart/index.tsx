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
  console.log(data, 'data');
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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            scale="band"
            tick={<CustomizedAxisTick />}
            interval={0}
          />

          <YAxis unit="k" domain={[0, 200]} tickCount={14} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 160]}
            tickCount={10}
          />

          <Tooltip />
          <Legend wrapperStyle={{ bottom: -20 }} />

          {showItems.includes('usage') && (
            <Bar
              dataKey="usage"
              barSize={30}
              fill={color.MarketingSolar}
              name="Usage"
            />
          )}

          {showItems.includes('demand') && (
            <Line
              dataKey="demand"
              stroke={color.Primary500}
              name="Demand"
              yAxisId="right"
              width={100}
              strokeWidth={3}
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
