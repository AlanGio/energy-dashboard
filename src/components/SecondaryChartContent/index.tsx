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
import { useState } from 'react';
import { TinyLineChart } from '../TinyLineChart';
import { generateDetailedUsedData } from '../../mocks/detailedUsedData';

export const SecondaryChartContent = () => {
  const [reportingPeriod, setReportingPeriod] = useState('11-2022');

  const handleChange = (event: SelectChangeEvent) => {
    setReportingPeriod(event.target.value as string);
  };

  const currentPeriod = reportingPeriod.split('-');

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        borderTopRightRadius: 32,
        backgroundColor: color.ShadesWhite,
        p: 4,
        ml: 2,
        mt: 2
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, pt: 4 }}>
              Detailed Usage Data
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                pt: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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
                >
                  Day
                </Button>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
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
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {generateDetailedUsedData(currentPeriod[0], currentPeriod[1]).map(
          (item) => (
            <Grid item xs={4} sm={2} key={item.name}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 2
                }}
              >
                <Typography variant="subtitle1">{item.name}</Typography>
                <TinyLineChart
                  data={item.hours}
                  sx={{
                    height: 100,
                    width: '100%',
                    border: `1px solid ${color.Neutral400}`,
                    pt: 2
                  }}
                />
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
