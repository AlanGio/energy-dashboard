import { color } from '../../config/theme';
import { Box, Grid, Typography } from '@mui/material';

export const Summary = ({ serviceData }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            pr: [1, 4],
            pb: [2, 4],
            borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`,
            borderRight: `1px solid ${color.TransparenciesSecondaryMain25}`
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: [1, 2],
              fontSize: [16, 18]
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
                <Typography variant="h3" sx={{ fontSize: [26, 36] }}>
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
            pt: [2, 0],
            pl: [0, 4],
            pb: [2, 4],
            borderBottom: `1px solid ${color.TransparenciesSecondaryMain25}`
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: [1, 2],
              fontSize: [16, 18]
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
                <Typography variant="h3" sx={{ fontSize: [26, 36] }}>
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
