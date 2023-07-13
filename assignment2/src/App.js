import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login"
import './style.css';
import Landing from './pages/LandingPage/Landing';
import NewTicket from './pages/TicketPage/Ticket';

const App = () => {
  

  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Login/>} />
      <Route  path="/landing" element={<Landing/>} />
      <Route path="/newticket" element={<NewTicket/>}/>
      </Routes>
    </Router>
  
  );
};

export default App;
