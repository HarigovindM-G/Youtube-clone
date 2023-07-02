import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./Videos";
import { ChannelCard } from "./ChannelCard";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
    <Box>
        <div style={{
          background:'linear-gradient(90deg, rgba(222,79,12,1) 0%, rgba(0,206,255,1) 100%)',
          zIndex:10,
          height:"300px"
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
    </Box> 
    <Box display="flex" p="2">
      <Box sx={{mr:{sm:'75px',xs:'10px'}}}/>
      <Videos  videos={videos}/>
    </Box> 
    </Box>
  )
};
