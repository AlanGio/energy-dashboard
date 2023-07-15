import { Box, Button, FormControlLabel, Typography } from "@mui/material";
import ViewToggleButton from "../GlobalComponents/ViewToggleButton";
import { SingleSwitch } from "../GlobalComponents/SingleSwitch";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BoltIcon from "@mui/icons-material/Bolt";

export const HeaderControls = () => (
  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 3, mb: 2 }}>
    <ViewToggleButton
      selectedValue="usage"
      sx={{
        display: "inline-flex",
        justifyContent: "center",
      }}
      options={[
        {
          name: "spending",
          text: "Spending",
          callback: console.log,
        },
        {
          name: "usage",
          text: "Usage",
          callback: console.log,
        },
      ]}
    />

    <FormControlLabel
      control={<SingleSwitch sx={{ m: 1 }} defaultChecked />}
      label="Show Weather Data"
    />

    <ViewToggleButton
      selectedValue="electric"
      sx={{
        display: "inline-flex",
        justifyContent: "center",
      }}
      options={[
        {
          name: "electric",
          text: (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BoltIcon />
              Electric
            </Box>
          ),
          callback: console.log,
        },
        {
          name: "gas",
          text: (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WhatshotIcon />
              Gas
            </Box>
          ),
          callback: console.log,
        },
        {
          name: "water",
          text: (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WaterDropIcon />
              Water
            </Box>
          ),
          callback: console.log,
        },
      ]}
    />

    <Button variant="tertiary" onClick={console.log}>
      <Typography
        sx={{
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 1,
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
          letterSpacing: "2px",

          textTransform: "uppercase",
        }}
      >
        Show my Bill
      </Typography>
    </Button>
  </Box>
);
