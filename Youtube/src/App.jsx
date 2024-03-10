import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Channels from './Components/Channels'
import  Search from './Components/Search'

import Navbar from './Components/Navbar'
import {Box} from '@mui/material'
import VideoDetails from './Components/VideoDetails'
function App() {
 

  return (
   
    <BrowserRouter>
    <Box sx={{background:'#000'}}>
    <Navbar/>
    <Routes>
    
      <Route path='/' exact element={<Home/>}/>
      <Route path='/videos/:id' element={<VideoDetails/>}/>
      <Route path='/channel/:id' element={<Channels/>}/>
      <Route path='/search/:id' element={<Search/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
