import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { MonthlyUsageChart } from "../MonthlyUsageChart";
import { color } from "../../config/theme";
import { useState } from "react";

export const MainChartContent = () => {
  const [reportingPeriod, setReportingPeriod] = useState("11-2022");

  const handleChange = (event: SelectChangeEvent) => {
    setReportingPeriod(event.target.value as string);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        borderTopRightRadius: 32,
        backgroundColor: color.ShadesWhite,
        p: 4,
        ml: 2,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              pr: 4,
              pb: 4,
              borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`,
              borderRight: `1px solid ${color.TransparenciesSecondaryMain25}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Month-to-Date
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">1000,396 kWh</Typography>
                <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                  Total Electric Usage
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">90.6 kW</Typography>
                <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                  Peak Demand
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              pl: 4,
              pb: 4,
              borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Year-to-Date
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">305,395 kWh</Typography>
                <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                  Total Electric Usage
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <Typography variant="h3">125.6 kW</Typography>
                <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                  Peak Demand
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <MonthlyUsageChart sx={{ height: 500 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
