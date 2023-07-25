import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { color } from '../../config/theme';
import { TinyLineChart } from '../TinyLineChart';

export const SecondaryChartContent = ({
  selectedMonth,
  selectedYear,
  handleSelectedMonth,
  handleSelectedYear,
  periods,
  chartData
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedPeriod = event.target.value.split('-');
    handleSelectedMonth(selectedPeriod[0]);
    handleSelectedYear(selectedPeriod[1]);
  };

  const distinctDays = [
    ...new Map(chartData.map((item) => [item['DateTime'], item])).values()
  ];

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        borderTopRightRadius: 32,
        backgroundColor: color.ShadesWhite,
        p: [2, 4],
        ml: [0, 2],
        mt: 2
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, pt: [1, 4] }}>
              Detailed Usage Data
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                justifyContent: 'space-between',
                pt: 1,
                gap: [2, 0]
              }}
            >
              <Box
                sx={{
                  gap: 1,
                  alignItems: 'center',
                  display: ['none', 'flex']
                }}
              >
                Filters
                <Button
                  size="small"
                  variant="secondarydark"
                  sx={{
                    textTransform: 'none',
                    minWidth: 'auto',
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: 0.5,
                    backgroundColor: color.Primary500
                  }}
                >
                  Month
                </Button>
                <Button
                  size="small"
                  variant="secondary"
                  sx={{
                    textTransform: 'none',
                    minWidth: 'auto',
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: 0.5
                  }}
                  disabled
                >
                  Week
                </Button>
                <Button
                  size="small"
                  variant="secondary"
                  sx={{
                    textTransform: 'none',
                    minWidth: 'auto',
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: 0.5
                  }}
                  disabled
                >
                  Day
                </Button>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, pt: [2, 0] }}
                >
                  Reporting Period
                </Typography>

                <FormControl fullWidth sx={{ mb: [2, 6] }}>
                  <Select
                    value={`${selectedMonth}-${selectedYear}`}
                    onChange={handleChange}
                    size="small"
                  >
                    {periods.map((period) => {
                      const periodSplit = period.split('-');
                      return (
                        <MenuItem value={period} selected>
                          {new Date(
                            `${periodSplit[0]}-1-${periodSplit[1]}`
                          ).toLocaleDateString('en-us', {
                            month: 'long',
                            year: 'numeric'
                          })}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {distinctDays.map((item) => (
          <Grid item xs={6} sm={2} key={item['ID']}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 2
              }}
            >
              <Typography variant="subtitle1">{item['DateTime']}</Typography>
              <TinyLineChart
                data={chartData
                  .filter(
                    (chartItem) => chartItem['DateTime'] === item['DateTime']
                  )
                  .map((item, index) => {
                    return {
                      name: new Date(item['DateTime']).toLocaleDateString(
                        'en-us',
                        {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        }
                      ),
                      usage: parseFloat(item['Electric Demand KW'])
                    };
                  })}
                sx={{
                  height: 100,
                  width: '100%',
                  border: `1px solid ${color.Neutral400}`,
                  pt: 2
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
