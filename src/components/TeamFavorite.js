import React from 'react';
import './TeamFavorite.css';
import battery from './icons/battery.svg';
import camera from './icons/camera.svg';
import games from './icons/games.svg';
import { Button } from '@material-ui/core';

function TeamFavorite() {
	return (
		<>

			<div className="componentTeam">
				<div className="teamFavorite__title">
					<h1>Team's favorites</h1>
				</div>


				<div className="teamFavorite__phone1">


					<div className="teamFavorite__center">
						<div className="teamFavorite__carousel">
							<img src="" alt="" />
						</div>

						<div className="teamFavorite__infoRight">
							<div className="teamFavorit__descr">

								<h3>Model Name</h3>
								<br />
								<h3>Price: 100$</h3>
								<br />
								<p>Description</p>
								<p>Description</p>
								<p>Description</p>
							</div>
							<div className="teamFavorite__images">
								<img src={battery} alt="battery" />
								<img src={camera} alt="camera" />
								<img src={games} alt="games" />

							</div>
							<Button className="teamFavorite__button">Add to bag</Button>

						</div>
					</div>
				</div >
			</div>
		</>
	)
}

export default TeamFavorite;
