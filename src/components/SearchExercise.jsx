import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const SearchExercise = ({
  setExercises,
  bodyPart,
  setBodyPart,
  search,
  setSearch,
}) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData =
        (await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        )) || [];

      setBodyParts(["all", ...bodyPartsData]);
      console.log(bodyPartsData);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        exerciseOptions
      );

      const selectExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(selectExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        We have Collection of awesome <br /> exercises for you
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "777px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            height: "77px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "170px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "57px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: {
              lg: "35px",
              xs: "18px",
            },
          }}
          mb="25px"
          textAlign="start"
        >
          <span style={{ fontSize: "28px", padding: "10px" }}>
            <MdOutlineKeyboardDoubleArrowLeft />
          </span>
          Select Body Part
          <span style={{ fontSize: "28px", padding: "10px" }}>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            p: "0px",
            overflowY: "hidden",
          }}
        >
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyPart
          />
        </Box>
      </>
    </Stack>
  );
};

export default SearchExercise;
