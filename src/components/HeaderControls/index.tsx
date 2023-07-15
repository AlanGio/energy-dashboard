import { Box, Button, FormControlLabel, Typography } from '@mui/material';
import ViewToggleButton from '../GlobalComponents/ViewToggleButton';
import { SingleSwitch } from '../GlobalComponents/SingleSwitch';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import BoltIcon from '@mui/icons-material/Bolt';

export const HeaderControls = ({
  metric,
  serviceType,
  handleMetric,
  weather,
  handleServiceType,
  handleWeather
}: {
  metric: string;
  serviceType: string;
  weather: boolean;
  handleMetric?: (usage: string) => void;
  handleServiceType?: (serviceType: string) => void;
  handleWeather?: (weather: boolean) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleWeather(event.target.checked);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3, mb: 2 }}>
      <ViewToggleButton
        selectedValue={metric}
        sx={{
          display: 'inline-flex',
          justifyContent: 'center'
        }}
        options={[
          {
            name: 'spending',
            text: 'Spending',
            callback: handleMetric
          },
          {
            name: 'usage',
            text: 'Usage',
            callback: handleMetric
          }
        ]}
      />

      <FormControlLabel
        control={
          <SingleSwitch
            checked={weather}
            onChange={handleChange}
            sx={{ m: 1 }}
            defaultChecked
          />
        }
        label="Show Weather Data"
      />

      <ViewToggleButton
        selectedValue={serviceType}
        sx={{
          display: 'inline-flex',
          justifyContent: 'center'
        }}
        options={[
          {
            name: 'electric',
            text: (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BoltIcon />
                Electric
              </Box>
            ),
            callback: handleServiceType
          },
          {
            name: 'gas',
            text: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatshotIcon />
                Gas
              </Box>
            ),
            callback: handleServiceType
          },
          {
            name: 'water',
            text: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WaterDropIcon />
                Water
              </Box>
            ),
            callback: handleServiceType
          }
        ]}
      />

      <Button variant="tertiary" onClick={console.log}>
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <DownloadOutlinedIcon />
          Download Billing History
        </Typography>
      </Button>

      <Button variant="secondary" onClick={console.log}>
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: '2px',

            textTransform: 'uppercase'
          }}
        >
          Show my Bill
        </Typography>
      </Button>
    </Box>
  );
};
