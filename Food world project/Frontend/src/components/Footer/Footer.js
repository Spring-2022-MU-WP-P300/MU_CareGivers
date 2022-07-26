import React from 'react';
import { NavLink } from 'react-router-dom'
import {faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
        <div className='clr'></div>
        <div id='footer'>
          <div className='left'>
          <h1 className="l-heading wht"><i><span class="highlight">Food</span>World</i></h1>
          <p className='wht'>WE ARE BETTER, WE ARE FRESHER, WE ARE TASTER</p>
          <div className='icon-list'>
          <FontAwesomeIcon icon={faFacebook} className="fb icons" size='3x'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEnvelope} className="en icons" size='3x'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faWhatsapp} className="wa icons" size='3x'></FontAwesomeIcon>
          </div>
   
          </div>
          <div className='right'>
            <h1 className='m-heading wht'>Links</h1>
            <ul className="f-list">
               <li> <NavLink to='/' className= 'list'>Home</NavLink></li>
               <li> <NavLink to='/' className= 'list'>About</NavLink></li>
               <li> <NavLink to='/' className= 'list'>Menu</NavLink></li>
               <li> <NavLink to='/' className= 'list'>Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='clr'></div>
        {/* <div className='para'>
        <p className='copyright'> &copy 2021 All Rights Reserved.</p>
        </div> */}
   
      </footer>
    );
};

export default Footer;