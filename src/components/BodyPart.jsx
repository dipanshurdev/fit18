import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ images, item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        width: { lg: "200px", xs: "100" },
        height: { lg: "200px", xs: "120px" },
        cursor: "pointer",
        gap: "10px",
        borderBottomLeftRadius: "20px",
      }}
    >
      <img
        src={images}
        alt="dumbbell"
        style={{
          width: "40px",
          height: "40px",
          filter:
            "invert(0%) sepia(0%)saturate(0%)hue-rotate(0deg)brightness(150%)contrast(100%)",
        }}
      />
      <Typography
        sx={{ fontSize: { lg: "24px", xs: "14px" } }}
        fontWeight="bold"
        color="#777"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
