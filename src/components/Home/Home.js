
import React, { Component } from 'react';
import Banner from '../Banner';
import BannerBottom from '../BannerBottom';
import OnePhone from './OnePhone';
import TeamFavorite from '../TeamFavorite';
import FullRange1 from '../FullRange/FullRange1';
import FullRange2 from '../FullRange/FullRange2';
import FullRange3 from '../FullRange/FullRange3';
import Carousel from '../Carousel/Carousel';
import './HomeStyle.css';


class Home extends Component {

	
  constructor(props) {
    super(props);
    this.state = {
	  data : null,
	  isShowingRange : false,
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


	handleClick = () => {
		this.setState({ isShowingRange: !this.state.isShowingRange })
	}
	render() {

		return (
      	<div className="home">
        <Banner />
		<div className="containerHome"></div>
		<Carousel />
        {this.state.data && <TeamFavorite
          picture1={this.state.data[0].pictures[0]}
          picture2={this.state.data[0].pictures[1]}
          picture3={this.state.data[0].pictures[2]}
          modelName={this.state.data[0].model}
          battery={this.state.data[0].battery}
          variant={this.state.data[0].variant}
        />
        }
        <BannerBottom />
		
		<FullRange1 />
		<FullRange2 handleClick={this.handleClick} />

		{this.state.isShowingRange &&  <FullRange3 /> }
		
		</div>

		);
	}

}

export default Home;

