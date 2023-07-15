import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { Grid, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { HeaderControls } from './components/HeaderControls';
import { LeftMenu } from './components/LeftMenu';
import { theme } from './config/theme';
import { TopLinks } from './components/TopLinks';
import { MainChartContent } from './components/MainChartContent';
import { SecondaryChartContent } from './components/SecondaryChartContent';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box>Link+</Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TopLinks />
            </Grid>
            <Grid item xs={12} sm={12}>
              <HeaderControls />
            </Grid>

            <Grid item xs={12} sm={3}>
              <LeftMenu />
            </Grid>

            <Grid item xs={12} sm={9}>
              <MainChartContent />
              <SecondaryChartContent />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
