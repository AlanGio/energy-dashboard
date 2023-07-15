import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { color } from "../../config/theme";
import React from "react";

export const LeftMenu = () => {
  const [source, setSource] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSource(event.target.value as string);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${color.TransparenciesSecondaryMain25}`,
        backgroundColor: color.ShadesWhite,
        p: 1,
      }}
    >
      <Typography variant="h4">General Info</Typography>
      <Typography variant="h5">Source, Unit</Typography>
      <FormControl fullWidth sx={{ mb: 6 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={source}
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={160} selected>
            Carrier (Source) + br44167 - 160 (Unit)
          </MenuItem>
          <MenuItem value={200}>
            Carrier (Source) + cr53442 - 200 (Unit)
          </MenuItem>
          <MenuItem value={300}>
            Carrier (Source) + ar46473 - 300 (Unit)
          </MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h4">PSB Valwood Mgmt/Leasing</Typography>
      <Typography variant="h5">180 Button Sr</Typography>
      <Typography variant="h5">Carrolton, TX 75006</Typography>
    </Box>
  );
};
