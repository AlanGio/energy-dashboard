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
  handleChangeReportingPeriod,
  selectedReportingPeriod,
  years,
  chartData
}: {
  serviceType: string;
  showItems: string[];
  handleChangeReportingPeriod: (param: string) => void;
  selectedReportingPeriod: string;
  years: number[];
  chartData?: any[];
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleChangeReportingPeriod(event.target.value as string);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        borderTopRightRadius: 32,
        backgroundColor: color.ShadesWhite,
        p: 4,
        ml: 2
      }}
    >
      <Grid container>
        <Summary serviceData={serviceData[serviceType]} />
        <Grid item xs={12} sm={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, pt: 4 }}>
              Monthly Usage Data
            </Typography>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, pt: 3 }}>
                Reporting Period
              </Typography>
              <FormControl fullWidth sx={{ mb: 6 }}>
                <Select
                  value={selectedReportingPeriod}
                  onChange={handleChange}
                  size="small"
                >
                  {years.map((year) => (
                    <MenuItem value={year}>Year {year}</MenuItem>
                  ))}
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
                display: 'flex',
                justifyContent: 'center',
                transform: 'rotate(180deg)',
                fontWeight: 600
              }}
            >
              Monthly Usage (kWh)
            </Typography>
            <LineBarAreaComposedChart
              sx={{ height: 500, width: '100%' }}
              data={chartData.map((item) => ({
                name: item.ServicePeriodFrom,
                demand: item.ElectricDemand,
                usage: parseInt(item.ElectricUsage),
                temperature: randomIntFromInterval(
                  item.ElectricDemand,
                  parseInt(item.ElectricUsage)
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
                display: 'flex',
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
