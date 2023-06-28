import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelUrl, demoProfilePicture } from '../utils/constants'

export const ChannelCard = ({channelDetail}) =>(
    <Box
    sx={{
        borderRadius:"20px",
        boxShadow:'none'
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:"#fff"}}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius:"50%",height:"180px",width:"180px",mb:2,border:"solid 1px #e3e3e3"}}
                />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:12,color:"grey",ml:"5px"}}/>
                </Typography>

            </CardContent>
        
        </Link>
    </Box>
)

