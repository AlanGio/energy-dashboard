import { Box, Button, Typography } from '@mui/material';
import { color } from '../../config/theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const TopLinks = () => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      my: 2,
      justifyContent: ['flex-end', 'space-between']
    }}
  >
    <Box sx={{ display: ['none', 'flex'] }}>
      <Button
        variant="tertiary"
        onClick={console.log}
        sx={{ display: ['none', 'block'] }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            gap: 1,
            borderBottom: `2px solid ${color.Primary500}`,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 20 }} />
          Back to Link+
        </Typography>
      </Button>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: ['space-between', 'flex-end'],
        gap: 2
      }}
    >
      <Button
        variant="tertiary"
        onClick={console.log}
        sx={{ maxWidth: 'auto' }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            gap: 1,
            borderBottom: `2px solid ${color.Primary500}`,
            fontSize: [12, 16]
          }}
        >
          Contact Link
        </Typography>
      </Button>

      <Box
        sx={{
          backgroundColor: color.TransparenciesSecondaryMain25,
          width: '2px',
          height: '30px'
        }}
      ></Box>

      <Button variant="tertiary" onClick={console.log}>
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            borderBottom: `2px solid ${color.Primary500}`,
            fontSize: [12, 16]
          }}
        >
          New Service Request
        </Typography>
      </Button>
    </Box>
  </Box>
);
