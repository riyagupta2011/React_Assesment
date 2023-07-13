import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Task1 from './pages/Task1/Task1';
import Task2 from './pages/Task2/Task2';
import Task3 from './pages/Task3/Task3';
import { UserProvider } from './UserContext';

import NotFound from './pages/NotFound/NotFound';

function App() {
  const [circleCount, setCircleCount] = useState(1);
  
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/task1"  element={<Task1 setCircleCount={setCircleCount}/>} />
        
        <Route path="/task2"  element={<Task2 circleCount={circleCount}/>} />
        <Route path="/task3"  element={<Task3/>} />
        <Route path="*" element={<NotFound/>} />
      
      </Routes>
     
    </Router>


    </UserProvider>
    
  );
}

export default App;
