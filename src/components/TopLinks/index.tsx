import { Box, Button, Typography } from "@mui/material";
import { color } from "../../config/theme";

export const TopLinks = () => (
  <Box sx={{ display: "flex", gap: 2, my: 2, justifyContent: "flex-end" }}>
    <Button variant="tertiary" onClick={console.log}>
      <Typography
        sx={{
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          gap: 1,
          borderBottom: `2px solid ${color.Primary500}`,
        }}
      >
        Contact Link
      </Typography>
    </Button>

    <Box
      sx={{
        backgroundColor: color.TransparenciesSecondaryMain25,
        width: "2px",
        height: "30px",
      }}
    ></Box>

    <Button variant="tertiary" onClick={console.log}>
      <Typography
        sx={{
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          borderBottom: `2px solid ${color.Primary500}`,
        }}
      >
        New Service Request
      </Typography>
    </Button>
  </Box>
);
