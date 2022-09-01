import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Turflock from './Turflock'

function Application() {
  return (
    
        <div className=''>
          <Router>
          <Turflock />  
            <Routes>
              <Route path='/' exact element={<Home />} />
            </Routes>
          </Router>
    
        </div>
   
  )
}

export default Application

