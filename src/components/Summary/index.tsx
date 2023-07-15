import { color } from '../../config/theme';
import { Box, Grid, Typography } from '@mui/material';

export const Summary = ({ serviceData }) => {
  console.log(serviceData);
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            pr: 4,
            pb: 4,
            borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`,
            borderRight: `1px solid ${color.TransparenciesSecondaryMain25}`
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            {serviceData[0].name}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {serviceData[0].values.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography variant="h3">
                  {' '}
                  {item.value} {item.symbol}
                </Typography>
                <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            pl: 4,
            pb: 4,
            borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            {serviceData[1].name}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {serviceData[1].values.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography variant="h3">
                  {' '}
                  {item.value} {item.symbol}
                </Typography>
                <Typography variant="body2" sx={{ textTransform: 'uppercase' }}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};
