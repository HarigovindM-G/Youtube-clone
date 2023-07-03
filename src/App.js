import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Feed } from './components/Feed';
import { VideoDetail } from './components/VideoDetail';
import { ChannelDetail } from './components/ChannelDetail';
import { SearchFeed } from './components/SearchFeed';


const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
    <Navbar/>
    <Routes>
      <Route path="Youtube-clone/" element={<Feed/>}/>
      <Route path="Youtube-clone/video/:id" element={<VideoDetail/>}/>
      <Route path="Youtube-clone/channel/:id" element={<ChannelDetail/>}/>
      <Route path="Youtube-clone/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
    </Box>
  </BrowserRouter>
  );

export default App;
