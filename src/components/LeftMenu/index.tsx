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
  handleChangeCustomer
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleChangeCustomer(event.target.value);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        backgroundColor: color.ShadesWhite,
        p: [2, 1],
        mt: [2, 0]
      }}
    >
      <Typography variant="h4">General Info</Typography>
      <Typography variant="h5">Source, Unit</Typography>
      <FormControl fullWidth sx={{ mb: 6 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCustomer}
          onChange={handleChange}
          size="small"
        >
          {customers.map((item) => (
            <MenuItem value={item} selected>
              {item.Customer}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h4">{selectedCustomer.UtilityVendor}</Typography>
      <Typography variant="h5">{selectedCustomer.MeterLocation}</Typography>
      <Typography variant="h5">{selectedCustomer.Customer}</Typography>
    </Box>
  );
};
