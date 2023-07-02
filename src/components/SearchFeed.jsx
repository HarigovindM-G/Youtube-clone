import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import { Videos } from './Videos';
import { Sidebar } from './Sidebar';

export const SearchFeed = () => {
  
  const { searchTerm } = useParams();
  const [videos,setVideos]= useState([]);
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 ,marginLeft:"10px"}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
      >
       Search result for  
        <span style={{ color: "red", marginLeft: "5px" }}> {searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
    )
}