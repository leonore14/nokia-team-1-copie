
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

