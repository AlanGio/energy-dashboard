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

export const MainChartContent = ({ serviceType }: { serviceType: string }) => {
  const [reportingPeriod, setReportingPeriod] = useState('11-2022');

  const handleChange = (event: SelectChangeEvent) => {
    setReportingPeriod(event.target.value as string);
  };

  const currentPeriod = reportingPeriod.split('-');
  const chartData = generateDetailedUsedData(
    currentPeriod[0],
    currentPeriod[1]
  );

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
                  <MenuItem value="11-2022" selected>
                    November 2022
                  </MenuItem>
                  <MenuItem value="12-2022">December 2022</MenuItem>
                  <MenuItem value="01-2023">Juanary 2023</MenuItem>
                  <MenuItem value="02-2023">February 2023</MenuItem>
                  <MenuItem value="03-2023">March 2023</MenuItem>
                  <MenuItem value="0411-2023">April 2023</MenuItem>
                  <MenuItem value="05-2023">May 2023</MenuItem>
                  <MenuItem value="06-2023">June 2023</MenuItem>
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
          />
        </Grid>
      </Grid>
    </Box>
  );
};
