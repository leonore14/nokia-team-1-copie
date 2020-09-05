import React from 'react';
import './SelectorToolStyle.css';
import NokiaMultico from '../images/YourMatch.jpg';
import { NavLink } from 'react-router-dom';
import clearTouch from '../icons/clear-touch.png';
import batteryIcon from '../icons/battery.png';
import gamesIcon from '../icons/games.png';
 

function MatchResult() {

  return (
    <>
      <div className="matchResultDiv">

        <div className='matchResultTitle'>
            <h1>Your match</h1>
            <h3>Here is the phone you need !</h3>
        </div>

        <div className='matchResultImages'>
            <div className='matchMainImg'>
                <img src={NokiaMultico}></img>
            </div>
            <div className='matchResultInfos'>
                <div className='matchCarousel'>
                    <img className='matchSmallImg'></img>
                </div>
                <div className='matchTextTitles'>
                    <h3 className='matchModelName'><strong>model</strong></h3>
                    <h4><strong>price €</strong></h4>
                </div>
                <div className='matchModelDescription'>
                    <p>description</p>
                    <p>description</p>
                    <p>description</p>
                </div>
                <div className='matchIcons'>
                    <img src={clearTouch} alt='clearTouch'></img>
                    <img src={gamesIcon} alt='gamesIcon'></img>
                    <img src={batteryIcon} alt='batteryIcon'></img>
                </div>
                <button className='matchAddButton'>Add to bag</button>

            </div>

        </div>

        <NavLink to='/' activeclassname='active' className='fullRangeNavLink'><button className='fullRangeButton'>Full range</button></NavLink>

      </div>
    
    </>

  );
}

export default MatchResult;