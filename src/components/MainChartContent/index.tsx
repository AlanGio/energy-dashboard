import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { LineBarAreaComposedChart } from '../LineBarAreaComposedChart';
import { color } from '../../config/theme';
import { Summary } from '../Summary';
import { serviceData } from '../../mocks/serviceData';
import { randomIntFromInterval } from '../../utils/numbers';

export const MainChartContent = ({
  serviceType,
  showItems,
  selectedMonth,
  selectedYear,
  handleSelectedMonth,
  handleSelectedYear,
  years,
  chartData
}: {
  serviceType: string;
  showItems: string[];
  selectedMonth: string;
  selectedYear: string;
  handleSelectedMonth: (param: string) => void;
  handleSelectedYear: (param: string) => void;
  years: number[];
  chartData?: any[];
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedPeriod = event.target.value.split('-');
    handleSelectedMonth(selectedPeriod[0]);
    handleSelectedYear(selectedPeriod[1]);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        borderTopRightRadius: 32,
        backgroundColor: color.ShadesWhite,
        p: [2, 4],
        ml: [0, 2]
      }}
    >
      <Grid container>
        <Summary serviceData={serviceData[serviceType]} />
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', 'row'],
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, pt: [2, 4] }}>
              Monthly Usage Data
            </Typography>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, pt: 3 }}>
                Reporting Period
              </Typography>
              <FormControl fullWidth sx={{ mb: [0, 6] }}>
                <Select
                  value={`01-${selectedYear}`}
                  onChange={handleChange}
                  size="small"
                >
                  {years.map((year) => {
                    return (
                      <MenuItem value={`01-${year}`}>Year {year}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography
              variant="h5"
              sx={{
                textOrientation: 'sideways',
                writingMode: 'vertical-rl',
                width: 30,
                height: 450,
                display: ['none', 'flex'],
                justifyContent: 'center',
                transform: 'rotate(180deg)',
                fontWeight: 600
              }}
            >
              Monthly Usage (kWh)
            </Typography>
            <LineBarAreaComposedChart
              sx={{
                height: [400, 500],
                width: '100%',
                '& .recharts-cartesian-axis-ticks': { fontSize: [10, 15] },
                '& .recharts-legend-wrapper': {
                  bottom: ['-5px !important', 20]
                }
              }}
              data={chartData.map((item) => ({
                name: item.ServicePeriodFrom,
                demand: item.ElectricDemand,
                usage: parseFloat(item.ElectricUsage),
                temperature: randomIntFromInterval(
                  item.ElectricDemand,
                  parseFloat(item.ElectricUsage)
                )
              }))}
              showItems={showItems}
            />
            <Typography
              variant="h5"
              sx={{
                textOrientation: 'sideways',
                writingMode: 'vertical-rl',
                width: 30,
                height: 450,
                display: ['none', 'flex'],
                justifyContent: 'center',
                fontWeight: 600
              }}
            >
              Monthly Demand (kW)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};