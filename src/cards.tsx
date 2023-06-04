import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

export default function CardsCmp({
  label,
  price,
}: {
  label: string;
  price: string;
}) {
  return (
    <Box width="100%">
      <Card
        sx={{
          margin: 3,
          padding: 3,
          display: "flex",
        }}
      >
        <AccountBoxRoundedIcon fontSize="large" />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontSize={12} ml={2}>
            {label}
          </Typography>
          <Typography fontSize={16} ml={2}>
            {price}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
