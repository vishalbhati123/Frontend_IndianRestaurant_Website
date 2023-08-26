import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='sd letter' />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>As you step inside "Spice Delight," you'll be greeted by the enchanting aromas of freshly ground spices and traditional Indian herbs. 
Our passionate chefs, trained in the art of Indian cooking, meticulously prepare each dish with great care and attention to detail.</p>
          <button type='button' className='custom__button'>Know More</button>
          </div>
         

          <div className='app__aboutus-content_knife flex__center'>
            <img src={images.knife} alt='about_knife' className='knife__img' />
           
            
            </div>

            <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>Spice Delight has a captivating history that traces its roots back to the early 1990s when a passionate and skilled chef, Rajesh Patel, embarked on a culinary journey to 
          bring the flavors of India to the world. </p>
          <button type='button' className='custom__button'>Know More</button>
          </div>
      </div>
    </div>
);

export default AboutUs;
