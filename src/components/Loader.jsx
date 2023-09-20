import React from "react";
import { Stack, Typography } from "@mui/material";
import { ProgressBar } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    flexDirection="column"
  >
    <ProgressBar barColor="#ff2625" borderColor="#777" />
    <Typography textTransform="capitalize" variant="body1">
      please wait
    </Typography>
  </Stack>
);

export default Loader;
