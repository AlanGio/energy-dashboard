import { Box, Container, Grid, Typography } from '@mui/material';
import MenuAppBar from './AppBar';
import { color } from '../../config/theme';

import background from '../../assets/images/header-bg.png';

export const Header = () => {
  const date = new Date().toDateString();

  return (
    <Box sx={{ backgroundColor: '#25242a' }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12}>
            <MenuAppBar />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              color: color.Primary100,
              display: 'flex',
              justifyContent: 'space-between',
              pt: 2,
              pb: 6,
              fontSize: 22,
              px: 2,
              backgroundImage: `url(${background})`
            }}
          >
            <Box>Welcome!</Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                fontSize: 25,
                fontFamily: 'Outfit'
              }}
            >
              Your space to grow,
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 600,
                  color: color.MarketingSolar,
                  fontFamily: 'Outfit'
                }}
              >
                Plus
              </Typography>{' '}
              more.
            </Box>
            <Box>{date}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
