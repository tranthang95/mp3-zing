import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyMusic from './pages/MyMusic';





const  App: React.FunctionComponent = () =>  {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='mymusic' element={<MyMusic />} />
        <Route path='*' element={<Home />} />

      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
