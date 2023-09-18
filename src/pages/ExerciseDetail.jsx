import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import { Detail, ExerciseVideos, SimilarExercise } from "../components";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentMuscleExercise, setEquipmentMuscleExercise] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Exercise videos and details
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      // Exercise data
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} `,
        youtubeOptions
      );

      // Target muscle

      const targetMuscle = await fetchData(
        `
            ${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}
            `,
        exerciseOptions
      );

      // Equipment muscle
      const equipmentData = await fetchData(
        `
              ${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}
              `,
        exerciseOptions
      );

      // Set States
      setEquipmentMuscleExercise(equipmentData.slice(0, 12));
      setTargetMuscleExercise(targetMuscle.slice(0, 12));
      setExerciseDetail(exerciseDetailData);
      setVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, []);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos videos={videos} name={exerciseDetail.name} />
      <SimilarExercise
        targetMuscleExercise={targetMuscleExercise}
        equipmentMuscleExercise={equipmentMuscleExercise}
      />
    </Box>
  );
};

export default ExerciseDetail;
