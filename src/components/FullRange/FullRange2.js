import React from 'react';
import clearTouch from '../icons/clear-touch_white.png';
import batteryIcon from '../icons/battery_white.png';
import gamesIcon from '../icons/games_white.png';
import './FullRangeStyle.css';
import HelpToolLink from '../images/HELP-logo.gif';
import { NavLink } from 'react-router-dom';
 

function FullRange2({ handleClick }) {

  return (
    <>
      <div className="FullRangeDiv2">

        <div className='rangeRow1'>
            <div className='rangeModel3'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>model</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg'></img>
                </div>
                <div className='rangeModelDescription'>
                    <p>description</p>
                    <p>description</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

            <div className='rangeModel4'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>model</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg'></img>
                </div>
                <div className='rangeModelDescription'>
                    <p>description</p>
                    <p>description</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

            <div className='rangeModel5'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>model</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg'></img>
                </div>
                <div className='rangeModelDescription'>
                    <p>description</p>
                    <p>description</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

        </div>

        <button className='showMoreButton' onClick={handleClick}>Show more</button>

      </div>
    
    </>

  );
}

export default FullRange2;