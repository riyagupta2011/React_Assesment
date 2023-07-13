import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <Link to="/task1" className="button">Go to Task 1</Link>
      
      </div>
  )
}

export default Home