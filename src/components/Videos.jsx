import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard } from './VideoCard';
import { ChannelCard } from './ChannelCard';

export const Videos = (props) => {
  if (props.videos === null) {
    return null;
  }
  return (
    <Stack direction={props.direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
      {props.videos.map((item,idx)=>(
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item} marginTop="none"/>}
          </Box>
      ))}

    </Stack>
  )
};
