import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const style = {
  overflowY: "hidden",
};
const ExerciseCard = ({ exercise }) => {
  return (
    <Box style={style}>
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{ marginTop: "15px" }}
        />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              backgroundColor: "#ffa9a9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              backgroundColor: "#fcc757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#ff2625"
          fontWeight="bold"
          mt="15px"
          pb="50px"
          textTransform="capitalize"
          fontSize="22px"
        >
          {exercise.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
