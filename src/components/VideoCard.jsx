import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Typography,CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle,demoChannelUrl,demoVideoTitle,demoThumbnailUrl,demoVideoUrl } from '../utils/constants'

export const VideoCard = ({video:{id:{videoId},snippet}}) => {
    return (
    <Card sx={{width:{md:"320px",xs:"90%"},boxShadow:'none',borderRadius:0}}>
        <Link to={videoId ? `video/${videoId}`: demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:358,height:180}}
            />
            <CardContent sx={{backgroundColor:'#1e1e1e',height:'100px', textAlign:"center"}}/>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl} sx={{backgroundColor:"#1e1e1e",color:"#1e1e1e",textDecoration: "none"}}>
                <Typography backgroundColor="#1e1e1e" variant='subtitle1' fontWeight="bold" color="#FFF" sx={{textDecoration: "none"}}>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `channnel/${snippet?.channelId}`: demoChannelUrl} sx={{backgroundColor:"#1e1e1e",color:"#1e1e1e",textDecoration: "none"}}>
                <Typography backgroundColor="#1e1e1e" variant='subtitle1' fontWeight="bold" color="#FFF" sx={{textDecoration: "none"}}>
                    {snippet?.channelTitle || demoVideoTitle}
                    <CheckCircle sx={{fontSize:12,color:"grey",ml:"5px"}}/>
                </Typography>
            </Link>
        </Link>
    </Card>
  )
}
