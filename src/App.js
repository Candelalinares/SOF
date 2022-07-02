import React from 'react'
import { Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 


import Home from './routes/Home'
import Colection from './routes/Colection'
import Roadmap from './routes/Roadmap'
import TopNFT from './routes/TopNFT'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/colection' element={<Colection />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/topNFT' element={ <TopNFT />} />
        </Routes>
    </div>
  );
}

export default App;
