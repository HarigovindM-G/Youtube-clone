import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { Videos } from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState("New")
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
},[selectedCategory])

  const selectCategory=(category)=>{
    setSelectedCategory(category)
  }
  return (
    <Stack sx={{ flexDirection: { sx: "coloumn", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectCategory={selectCategory} selectedCategory={selectedCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Harigovind M G :)
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New
          <span style={{ color: "red", marginLeft: "5px" }}>videos</span>
        </Typography>
        <Videos/>
      </Box>
    </Stack>
  );
};
