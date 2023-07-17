import Container from '@mui/material/Container';
import './App.css';
import { Grid, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { HeaderControls } from './components/HeaderControls';
import { LeftMenu } from './components/LeftMenu';
import { theme } from './config/theme';
import { TopLinks } from './components/TopLinks';
import { MainChartContent } from './components/MainChartContent';
import { SecondaryChartContent } from './components/SecondaryChartContent';
import { useState } from 'react';
import { Header } from './components/Header';

const App = () => {
  const [serviceType, setServiceType] = useState('electric');
  const [metric, setMetric] = useState('usage');
  const [weather, setWeather] = useState(false);

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
              <HeaderControls
                serviceType={serviceType}
                metric={metric}
                handleServiceType={setServiceType}
                handleMetric={setMetric}
                handleWeather={setWeather}
                weather={weather}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <LeftMenu />
            </Grid>

            <Grid item xs={12} sm={9}>
              <MainChartContent
                serviceType={serviceType}
                showItems={
                  weather
                    ? ['usage', 'demand', 'temperature']
                    : ['usage', 'demand']
                }
              />
              <SecondaryChartContent />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
