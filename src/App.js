// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/counter/counter';
import About from './Components/about/about';
import Home from './Components/home/home';
import Navbar from './Components/navbar/navbar';
import { BrowserRouter, Routes, Route ,  } from "react-router-dom";

import Signup from './Components/signup/signup';
function App() {

  return (
    <div>

<BrowserRouter>
  {/* <HashRouter basename="/"> */}

    <Navbar/>
      <Routes>
        <Route>
          <Route index element={<Home />} />  
          <Route path="/home" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      {/* </HashRouter> */}
    </BrowserRouter>

      </div>
      
    
  );
}

export default App;
