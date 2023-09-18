import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" py="25px" bgcolor="#fff3f4">
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
      >
        <Box>
          <img src={Logo} alt="logo" width="40px" height="35px" />
          <span
            style={{ fontSize: "1.9rem", fontWeight: "700", color: "ff2625" }}
          >
            Fit18
          </span>
        </Box>
        <Typography variant="h6">
          Made by{" "}
          <a
            style={{ color: "#777", textDecoration: "none" }}
            href="https://github.com/amanr-dev"
          >
            Aman Rawat
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
