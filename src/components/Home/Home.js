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
	  data : [],
	  isShowingRange : false,
    };
  }

	componentDidMount() {
		this.getPhone();
	}

	getPhone = () => {
		fetch(`https://nokia-hackathon.herokuapp.com/phones`)
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
        <TeamFavorite />
        <BannerBottom />
		
		<FullRange1 />
		<FullRange2 handleClick={this.handleClick} />

		{this.state.isShowingRange &&  <FullRange3 /> }

    
				<div className="phones">
					{this.state.data.map(phone =>
						<OnePhone
							picture={phone.pictures}
							name={phone.model}
							shortDescription={phone.battery}
						/>
					)}
				</div>

			</div>

		);
	}

}

export default Home;

