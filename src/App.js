import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';


const app = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
               <Route path="/" exact element={<Feed />}/>
               <Route path="/video/:id" element={<VideoDetail />}/>
               <Route path="/search/:searchTerm" element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default app