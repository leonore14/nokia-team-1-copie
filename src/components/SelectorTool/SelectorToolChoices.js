import React from 'react';
import './SelectorToolStyle.css';
import euro from '../icons/€_white.png';
import euroeuro from '../icons/€€_white.png';
import euroeuroeuro from '../icons/€€€_white.png';
import Gwhite from '../icons/4G_white.png';
import battery from '../icons/battery_white.png';
import durability from '../icons/durability_white.png';
import games from '../icons/games_white.png';
import camera from '../icons/camera_white.png';
import music from '../icons/music_white.png';



function SelectorTool() {

  return (
    <>
      <div className="selectorToolChoicesDiv">

        <div className='topTextSelector'>
         <h1>Need help to choose ?</h1>
         <h3>We have developped this selector tool to help you to make your mind.</h3>
         <h3>For each topic, pick your favorite feature and discover the phone made for you !</h3>
        </div>
 
        <div className='tableSelector'>
        
          <div className='firstrow'>
            <div className='verticalText'>
              Profile
            </div>
            <div className='verticalText'>
              Price
            </div>
            <div className='verticalText'>
              Technology
            </div>
            <div className='verticalText'>
              Leisure
            </div>
          </div>

          <div className='otherRows'>
            <div className='featureIcons'>
              <img src={euro}></img>
              <br></br>
              <h5>Stay Connected</h5>
              <p>Talk easily with relatives</p>
            </div>
            <div className='featureIcons'>
              <img src={euro}></img>
              <br></br>
              <h5>Good Deal</h5>
              <p>Affordable option</p>
            </div>
            <div className='featureIcons'>
              <img src={Gwhite}></img>
              <br></br>
              <h5>4G</h5>
              <p>Get fast connection</p>
            </div>
            <div className='featureIcons'>
              <img src={games}></img>
              <br></br>
              <h5>Games</h5>
              <p>Play The Snake & more</p>
            </div>
          </div>

          <div className='otherRows'>
            <div className='featureIcons'>
              <img src={euroeuro}></img>
              <br></br>
              <h5>Live Adventures</h5>
              <p>Resistant to any journey</p>
            </div>
            <div className='featureIcons'>
              <img src={euroeuro}></img>
              <br></br>
              <h5>Medium</h5>
              <p>Medium price</p> 
            </div> 
            <div className='featureIcons'>
              <img src={battery}></img>
              <br></br>
              <h5>Battery</h5>
              <p>Stay charged 30 days</p> 
            </div>
            <div className='featureIcons'>
              <img src={camera}></img>
              <br></br>
              <h5>Camera</h5>
              <p>High quality photos</p>
            </div>
          </div>

          <div className='otherRows'>
            <div className='featureIcons'>
              <img src={euroeuroeuro}></img>
              <br></br>
              <h5>Have fun</h5>
              <p>Easy to use, easy to play</p>
            </div>
            <div className='featureIcons'>
              <img src={euroeuroeuro}></img>
              <br></br>
              <h5>Premium</h5>
              <p>Premium selection</p>
            </div>
            <div className='featureIcons'>
              <img src={durability}></img>
              <br></br>
              <h5>Durability</h5>
              <p>Super resistant</p>
            </div>
            <div className='featureIcons'>
             <img src={music}></img>
             <br></br>
             <h5>Music</h5>
              <p>Listen to your favorite songs</p>
            </div>
          </div>

        </div>



      </div>
    
    </>

  );
}

export default SelectorTool;