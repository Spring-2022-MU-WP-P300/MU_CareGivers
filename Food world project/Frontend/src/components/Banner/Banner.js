import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
        <div id='top-section'>
        <div className="container">
          <div className="center">
              <h1 className="l-heading "> <span class="highlight">Food</span>World</h1>
              <h1 className="m-heading ">Find Your Favourite Food</h1>
           <p className=''>Imagine you don't need a diet because we provide healthy and delicious food for you!</p>
 
          </div>
      </div>
        </div>
        </div>
    );
};

export default Banner;