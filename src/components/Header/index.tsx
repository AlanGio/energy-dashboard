import { Box, Container, Grid, Typography } from '@mui/material';
import MenuAppBar from './AppBar';
import { color } from '../../config/theme';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import background from '../../assets/images/header-bg.png';

export const Header = () => {
  const date = new Date().toDateString();

  return (
    <Box sx={{ backgroundColor: [color.Neutral800, '#25242a'] }}>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              pt: 2,
              pb: [8, 6],
              fontSize: 22,
              px: 2,
              backgroundImage: ['none', `url(${background})`],
              alignItems: 'flex-end'
            }}
          >
            <Box sx={{ display: ['none', 'flex'] }}>Welcome!</Box>
            <Box
              sx={{
                gap: 1,
                alignItems: 'center',
                fontSize: 25,
                fontFamily: 'Outfit',
                display: ['none', 'flex']
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
            <Box
              sx={{
                display: ['flex', 'none'],
                fontSize: [14, 22],
                alignItems: 'center',
                textDecoration: 'underline'
              }}
            >
              <ArrowBackIosIcon /> Back
            </Box>
            <Box
              sx={{ display: 'flex', fontSize: [14, 22], alignItems: 'center' }}
            >
              {date}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
