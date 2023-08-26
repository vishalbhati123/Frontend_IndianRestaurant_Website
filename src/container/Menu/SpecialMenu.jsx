import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'></div>
    <SubHeading title='Embark on a Flavorful Journey: Where North and South Meet in Culinary Harmony!'/>
    <h1 className='headtext__cormorant'>Weekly Special</h1>
    <div className='app__specialMenu-menu'>
   
      <div className='app__specialMenu-menu-wine flex__center'>
        <p className='app__specialMenu-menu_heading'>North Indian Style</p>
        <div className='app__specialMenu_menu_items'>
          {data.north.map((north, index) => (
            <MenuItem key={north.title+index} title={north.title} price={north.price} tags={north.tags}/>
          ))}
        </div>
    </div>

    <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt='menu img'/>
    </div>

    <div className='app__specialMenu-menu-cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>South Indian Style</p>
        <div className='app__specialMenu_menu_items'>
          {data.south.map((south, index) => (
            <MenuItem key={south.title+index} title={south.title} price={south.price} tags={south.tags}/>
          ))}
        </div>
    </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
 
);

export default SpecialMenu;
