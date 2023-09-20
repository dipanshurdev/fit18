import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroBanner = () => {
  return (
    <Box
      // sx={{
      //   mt: { lg: "212px", xs: "70px" },
      //   ml: { sm: "50px" },
      // }}
      position="relative"
      p="20px"
      id="banner"
      color="#fff"
    >
      <Box
        color="#FFF"
        sx={{
          mt: { lg: "150px", xs: "100px" },
          ml: { lg: "55px", xs: "20px" },
        }}
      >
        <Typography fontWeight="600" fontSize="26px">
          Fitness Hub
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
          }}
          mb="25px"
          mt="30px"
        >
          Sweat, Smile & <br />
          Exercise Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the best exercises for yourself.
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#FF2625", padding: "10px" }}
        >
          Explore
        </Button>
      </Box>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.4,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Get Up!
      </Typography>
      {/* <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> */}
    </Box>
  );
};

export default HeroBanner;
