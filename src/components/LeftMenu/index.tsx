import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { color } from '../../config/theme';

export const LeftMenu = ({
  customers,
  selectedCustomer,
  handleChangeCustomer,
  sx = {}
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleChangeCustomer(event.target.value);
  };

  return (
    <Box
      sx={{
        border: ['none', `1px solid ${color.TransparenciesSecondaryMain25}`],
        backgroundColor: ['transparent', color.ShadesWhite],
        p: [2, 1],
        mt: [2, 0],
        ...sx
      }}
    >
      <Box sx={{ display: ['none', 'block'] }}>
        <Typography variant="h4">General Info</Typography>
        <Typography variant="h5">Source, Unit</Typography>
      </Box>
      <FormControl fullWidth sx={{ mb: 6 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCustomer}
          onChange={handleChange}
          size="small"
          sx={{
            '&.MuiOutlinedInput-root': {
              backgroundColor: ['transparent', 'white'],
              color: [color.Primary100, 'black']
            },
            '& .MuiSvgIcon-root': {
              fill: [color.Primary100, 'black']
            }
          }}
        >
          {customers.map((item) => (
            <MenuItem value={item} selected>
              {item.Customer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ display: ['none', 'block'] }}>
        <Typography variant="h4">{selectedCustomer.UtilityVendor}</Typography>
        <Typography variant="h5">{selectedCustomer.MeterLocation}</Typography>
        <Typography variant="h5">{selectedCustomer.Customer}</Typography>
      </Box>
    </Box>
  );
};
