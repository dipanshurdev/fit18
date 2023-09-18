import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ videos, name }) => {
  if (!videos.length) {
    return <Loader />;
  }

  // console.log(videos);

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="28px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}{" "}
        </span>
        exercise videos.
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "100px", xs: "0" },
        }}
      >
        {videos?.slice(0, 8).map((item, idx) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            key={idx}
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box textAlign="start">
              <Typography variant="h5" color="#777">
                {item.video.title}
              </Typography>
              <Typography variant="body1" color="#777">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
