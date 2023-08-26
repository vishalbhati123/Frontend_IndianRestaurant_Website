import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
        <Newsletter />
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
       <h1 className='app__footer-headtext'>Contact Us</h1>
       <p className='p__opensans'>82 Thorpe Rd, Norwich, Norfolk NR1</p>
       <p className='p__opensans'>+64 0213985389</p>
       <p className='p__opensans'>+64 0223459934</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='gericht logo' />
        <p className='p__opensans'>"Indulge in the Spice of Life: Where Every Dish Tells a Story and Every Bite Unveils a Journey."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
      <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
       <p className='p__opensans'>Monday-Friday:</p>
       <p className='p__opensans'>8.00am-12.00am</p>
       <p className='p__opensans'>Saturday-Sunday:</p> 
       <p className='p__opensans'>7.00am-11.00pm</p>
      </div>

     </div>
     <div className='footer__copyright'>
      <p className='p__opensans'>2021 Spice Delight. All Rights Reserverd</p>
  </div>
  </div>
  
);

export default Footer;
