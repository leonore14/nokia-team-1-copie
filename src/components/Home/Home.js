import React, { Component } from 'react';
import Banner from '../Banner';
import BannerBottom from '../BannerBottom';
import OnePhone from './OnePhone';
import TeamFavorite from '../TeamFavorite';
import FullRange from '../FullRange/FullRange';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
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


	render() {

		return (
      <div className="home">
        <Banner />
        <TeamFavorite />
        <BannerBottom />
		<FullRange />
    
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

