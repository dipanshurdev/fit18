import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import { Navbar } from "./components";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}
