import Container from '@mui/material/Container';
import './App.css';
import {
  Box,
  Grid,
  StyledEngineProvider,
  ThemeProvider,
  Typography
} from '@mui/material';
import { HeaderControls } from './components/HeaderControls';
import { LeftMenu } from './components/LeftMenu';
import { theme } from './config/theme';
import { TopLinks } from './components/TopLinks';
import { MainChartContent } from './components/MainChartContent';
import { SecondaryChartContent } from './components/SecondaryChartContent';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import data from './mocks/mainMock.json';
import dailyData from './mocks/dailyMockData.json';
import '@fontsource/roboto/400.css';

const App = () => {
  const customers = [
    ...new Map(data.map((item) => [item['Customer'], item])).values()
  ];

  const years = [
    ...new Set(
      data.map((item) => new Date(item.ServicePeriodFrom).getFullYear())
    )
  ];

  const periods = [
    ...new Set(
      dailyData.map(
        (item) =>
          `${new Date(item.DateTime).getMonth() + 1}-${new Date(
            item.DateTime
          ).getFullYear()}`
      )
    )
  ] as string[];

  const initialPeriod = periods[0].split('-');

  const [selectedMonth, setSelectedMonth] = useState<string>(
    initialPeriod[0] as string
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    initialPeriod[1] as string
  );
  const [serviceType, setServiceType] = useState('electric');
  const [metric, setMetric] = useState('usage');
  const [weather, setWeather] = useState(false);
  const [customer, setCustomer] = useState(customers[0]);

  const chartData = data.filter(
    (item) =>
      new Date(item.ServicePeriodFrom).getFullYear() ===
        parseInt(selectedYear) && item.Customer === customer.Customer
  );

  const chartDailyData = dailyData.filter(
    (item) =>
      new Date(item.DateTime).getFullYear() === parseInt(selectedYear) &&
      new Date(item.DateTime).getMonth() === parseInt(selectedMonth) - 1 &&
      item.Customer === customer.Customer
  );

  const chartDailyDataFormatted = chartDailyData.map((item) => ({
    ...item,
    DateTime: new Date(item.DateTime).toLocaleDateString('en-us', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
  }));

  useEffect(() => {
    // Hack to Show daily data for 2023
    if (selectedYear === '2023') {
      setSelectedMonth('2');
    }
  }, [selectedYear]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />

        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TopLinks />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h3"
                sx={{ display: ['flex', 'none'], mb: 3 }}
              >
                Energy+
              </Typography>
              <HeaderControls
                serviceType={serviceType}
                metric={metric}
                handleServiceType={setServiceType}
                handleMetric={setMetric}
                handleWeather={setWeather}
                weather={weather}
              />
            </Grid>

            <Box
              sx={{ display: 'flex', flexDirection: ['column-reverse', 'row'] }}
            >
              <Grid item xs={12} sm={3}>
                <LeftMenu
                  customers={customers}
                  selectedCustomer={customer}
                  handleChangeCustomer={setCustomer}
                  sx={{
                    position: ['absolute', 'relative'],
                    top: [80, 0],
                    width: ['calc(90% - 48px)', 'auto']
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={9}>
                <MainChartContent
                  serviceType={serviceType}
                  showItems={
                    weather
                      ? ['usage', 'demand', 'temperature']
                      : ['usage', 'demand']
                  }
                  years={years}
                  selectedMonth={selectedMonth}
                  selectedYear={selectedYear}
                  handleSelectedMonth={setSelectedMonth}
                  handleSelectedYear={setSelectedYear}
                  chartData={chartData}
                />
                <SecondaryChartContent
                  periods={periods}
                  selectedMonth={selectedMonth}
                  selectedYear={selectedYear}
                  handleSelectedMonth={setSelectedMonth}
                  handleSelectedYear={setSelectedYear}
                  chartData={chartDailyDataFormatted}
                />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
