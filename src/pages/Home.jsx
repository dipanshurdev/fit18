import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercise } from "../components";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        search={search}
        setSearch={setSearch}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        search={search}
      />
    </Box>
  );
};

export default Home;
