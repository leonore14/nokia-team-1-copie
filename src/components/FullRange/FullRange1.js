import React from 'react';
import clearTouch from '../icons/clear-touch_white.png';
import batteryIcon from '../icons/battery_white.png';
import gamesIcon from '../icons/games_white.png';
import './FullRangeStyle.css';
import HelpToolLink from '../images/HELP-logo.gif';
import { NavLink } from 'react-router-dom';
 

function FullRange1({data}) {

  return (
    <>
      <div className="FullRangeDiv">

        <div className='rangeRow1'>
            <div className='rangeModel1'>
                <div className='rangeModelTitles'>
                    <h3 className='matchModelName'><strong>{data[0].model}</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg' src={data[0].pictures[0]}></img>
                </div>
                <div className='rangeModelDescription'>
                    <p>Available Colors: {data[0].colors}</p>
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
                    <h3 className='matchModelName'><strong>{data[1].model}</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='rangeCarousel'>
                    <img className='rangeImg' src={data[1].pictures[0]}></img>
                </div>
                <div className='rangeModelDescription'>
                <p>Available Colors: {data[1].colors}</p>
                </div>
                <div className='rangeModelIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='rangeModelAddButton'>Add to bag</button>
            </div>

            <div className='helpToolLink'>
              <NavLink to='/SelectorTool' activeclassname='active'>
                <div className='selectorContainer'>
                  <h2 className='helpTitle'>Need help<br></br>to choose ?</h2>
                  <img src={HelpToolLink} alt='helpToolLink'></img>
                  <button className='selectorToolButton'>Discover our selector tool</button>
                </div>
              </NavLink>
            </div>

        </div>

      </div>
    
    </>

  );
}

export default FullRange1;