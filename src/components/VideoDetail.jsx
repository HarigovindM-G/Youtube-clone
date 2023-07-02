import React, { useEffect , useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Stack } from '@mui/material'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CheckCircle, Height } from '@mui/icons-material'

export const VideoDetail = () => {
 const [videoDetail, setVideoDetail] = useState(null)
 const [videos,setVideos] = useState(null)

  const {id}=useParams()

 useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideosId=${id}&type=video`)
    .then((data)=>setVideos(data.items))
  },[id])
  
  if (!videoDetail?.snippet) return "Loading....." 

  const {snippet: {title,channelId,channelTitle},statistics:{viewCount,likeCount} } = videoDetail

  return (
   <Box minHeight='95vh' p={1}>
    <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',top:'86px'}} >
            <ReactPlayer className='player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent='space-between' py={1} px={2} sx={{color:"#fff"}}>
              <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:'subtitle1' , md:"h6"}} sx={{textDecoration:'none', color:'#fff'}}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px',color:"grey",ml:"5px"}}/>
                </Typography>
              </Link> 
              <Stack direction="row" gap="20px" alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>  
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
           <Videos videos={videos} direction='column'/>
        </Box>  
      </Stack>
   </Box>
  )
}
