import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';



function Banner() {
	return (
		<div className="banner">
			<div className="banner__info">
				<h5>Refined designs,</h5>
				<h5>easy to use & made to last.</h5>
			</div>
			<div className="banner__title">
				<h1>Stay connected !</h1>
				<h1> Let's discover our </h1>
				<h1>Classic Phones</h1>
			</div>
			
			<Button className="banner__findButton">Find out more</Button>
			
		</div >
	)
}

export default Banner;
