import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Indulge in the Exquisite Flavors of India!'/>
      <h1 className='app__header-h1'>The Key of Indian Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>an authentic Indian restaurant that will take your taste buds on a culinary journey through the rich and diverse flavors of India. Situated in the heart of Auckland, our restaurant offers a warm and inviting atmosphere, perfect for a memorable dining experience.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
      </div>
    <div className='app__wrapper_img'>
<img src={images.welcome} alt='header img'/>
      </div>
  </div>
);

export default Header;
