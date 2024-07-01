import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
         <button onClick={() => navigate('/Login')}>Login To Play</button></div>
  )
}

export default Home