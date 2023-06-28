import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard } from './VideoCard';
import { ChannelCard } from './ChannelCard';

export const Videos = (props) => {
  if (props.videos === null) {
    return null;
  }
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    {console.log(props.videos)}
      {props.videos.map((item,idx)=>(
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
      ))}

    </Stack>
  )
};
