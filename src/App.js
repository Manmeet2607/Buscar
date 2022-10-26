import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,Feed,SearchFeed,ChannelDetail,VideoDetail} from './components';
console.log(process.env.REACT_APP_API_KEY)

const App = () => (
        <BrowserRouter>
            <Box sx={{backgroundColor:'black'}}>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Feed/>}/>
                    <Route path="/video/:id" element={<VideoDetail/>}/>
                    <Route path="/channel/:id" element={<ChannelDetail/>}/>
                    <Route path="/search/:searchTerm" element={<SearchFeed />}/>
                </Routes>
            </Box>
        </BrowserRouter>
  );


export default App;