import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote' />
        <p className='p__opensans'>Food is not merely sustenance; it is an expression of culture, tradition, and love. Through my culinary creations,
         I strive to transport guests to the vibrant streets of India.</p>
        </div>
        

    </div>
    <div className='app__chef-sign'>
      <p>Ravi Sharma</p>
      <p className='p__opensans'>Master Chef & Curator of Indian Flavors</p>
      <img src={images.sign} alt='sign' />

    </div>
    </div>
    
  </div>
);

export default Chef;
 