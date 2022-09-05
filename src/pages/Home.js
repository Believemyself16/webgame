import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/back.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})`}}>
        <h1>The Messenger</h1>
        <p>Journey to become a hero?</p>
        <Link to='/menu'>
          <button> Pre-order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;