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
import { useState } from 'react';
import { generateDetailedUsedData } from '../../mocks/detailedUsedData';
import { Summary } from '../Summary';
import { serviceData } from '../../mocks/serviceData';

export const MainChartContent = ({
  serviceType,
  showItems
}: {
  serviceType: string;
  showItems: string[];
}) => {
  const [reportingPeriod, setReportingPeriod] = useState('2022');

  const handleChange = (event: SelectChangeEvent) => {
    setReportingPeriod(event.target.value as string);
  };

  const chartData = generateDetailedUsedData(null, reportingPeriod);

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
                  value={reportingPeriod}
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value="2020">Year 2020</MenuItem>
                  <MenuItem value="2021">Year 2021</MenuItem>
                  <MenuItem value="2022" selected>
                    Year 2022
                  </MenuItem>
                  <MenuItem value="2023">Year 2023</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <LineBarAreaComposedChart
            sx={{ height: 500 }}
            data={chartData.map((item) => ({
              name: item.name,
              ...item.day
            }))}
            showItems={showItems}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
