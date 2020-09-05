import React, { Component } from 'react';
import './SelectorToolStyle.css';
import NokiaMultico from '../images/YourMatch.jpg';
import { NavLink } from 'react-router-dom';
import clearTouch from '../icons/clear-touch.png';
import batteryIcon from '../icons/battery.png';
import gamesIcon from '../icons/games.png';
 

class MatchResult2 extends Component {

	
    constructor(props) {
      super(props);
      this.state = {
        data :null,
      };
    }
  
      componentDidMount() {
          this.getPhone();
      }
  
      getPhone = () => {
          fetch(`https://cors-anywhere.herokuapp.com/https://nokia-hackathon.herokuapp.com/phones`)
              .then(response => response.json())
              .then(data => {
                  this.setState({ data })
              })
      }



      render() {

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
                    {this.state.data && <img src={this.state.data[3].pictures[0]} /> }
                </div>
                <div className='matchTextTitles'>
                    <h3 className='matchModelName'>Nokia 3310</h3>
                    <h3 className='matchModelName'>59 €</h3>
                </div>
                <div className='matchModelDescription'>
                    <p>Perfect phone for nostalgic</p>
                    <p>of the Snake !</p>
                    <p>Robust phone & Easy to use.</p>
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
}
export default MatchResult2;