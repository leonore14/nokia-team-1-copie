import React from 'react';
import clearTouch from '../icons/clear-touch_white.png';
import batteryIcon from '../icons/battery_white.png';
import gamesIcon from '../icons/games_white.png';
import './FullRangeStyle.css';
import { NavLink } from 'react-router-dom';
 

function FullRange3({ data }) {

  return (
    <>
      <div className="FullRangeDiv2">

        <div className='rangeRow1'>
            <div className='rangeModel1'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>{data[5].model}</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg' src={data[5].pictures[0]}></img>
                </div>
                <div className='rangeModelDescription'>
                <p>Available Colors: {data[5].colors}</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

            <div className='rangeModel2'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>{data[6].model}</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='longBoi' src={data[6].pictures[0]}></img>
                </div>
                <div className='rangeModelDescription'>
                <p>Available Colors: {data[6].colors}</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

            <div className='rangeModel3'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>{data[7].model}</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg' src={data[7].pictures[0]}></img>
                </div>
                <div className='rangeModelDescription'>
                <p>Available Colors: Pink</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

        </div>

        <NavLink to='/SelectorTool' activeclassname='active'>
            <button className='showMoreButton'>Discover our selector tool</button>
        </NavLink>

      </div>
    
    </>

  );
}

export default FullRange3;