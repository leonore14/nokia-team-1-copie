import React from 'react';
import './TeamFavorite.css';
import battery from './icons/battery_white.png';
import camera from './icons/camera_white.png';
import games from './icons/games_white.png';
import { Button } from '@material-ui/core';




function TeamFavorite ({ picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, modelName }) {
	return (
		<>
			<div className='emptyContainer'></div>

			<div className="componentTeam">
				
				<div className="teamFavorite__title">
					<h1>Team's favorites</h1>
				</div>

				<div className="teamFavorite__phone1">


					<div className="teamFavorite__center">
						<img src={picture1} />
						<img src={picture2} />
						<img src={picture3} />
					</div>

					<div className="teamFavorite__infoRight">
							<div className="teamFavorit__descr">

								<h3><strong>{modelName}</strong></h3>
								<br />
								<h3><strong>Price: 100€</strong></h3>
								<br />
								<p>Easy to Use</p>
								<p>High quality camera</p>
								<p>Long lasting battery</p>
							</div>
							<div className="teamFavorite__images">
								<img src={battery} alt="battery" />
								<img src={camera} alt="camera" />
								<img src={games} alt="games" />
							</div>
							<button className="teamFavorite__button">Add to bag</button>
					</div>
					
				</div >
			</div>
			
			<div className='emptyContainer'></div>
			<div className='emptyContainer'></div>


				<div className="teamFavorite__phone2">


				<div className="teamFavorite__center2">
						<img src={picture4} />
						<img src={picture5} />
						<img src={picture6} />
					</div>

					<div className="teamFavorite__infoRight2">
							<div className="teamFavorit__descr">

								<h3><strong>Nokia 800 Tough</strong></h3>
								<br />
								<h3><strong>Price: 100€</strong></h3>
								<br />
								<p>Super resistant</p>
								<p>Waterproof</p>
								<p>Radio</p>
							</div>
							<div className="teamFavorite__images">
								<img src={battery} alt="battery" />
								<img src={camera} alt="camera" />
								<img src={games} alt="games" />
							</div>
							<button className="teamFavorite__button">Add to bag</button>
					</div>


				<div className='emptyContainer'></div>
				<div className='emptyContainer'></div>

				<div className="teamFavorite__phone3">

				<div className="teamFavorite__center3">
						<img src={picture7} />
						<img src={picture8} />
						<img src={picture9} />
					</div>

					<div className="teamFavorite__infoRight3">
						<div className="teamFavorit__descr">

							<h3><strong>Nokia 130</strong></h3>
							<br />
							<h3><strong>Price: 100€</strong></h3>
							<br />
							<p>High quality camera</p>
							<p>Micro USB</p>
							<p>Removable battery</p>
						</div>
						<div className="teamFavorite__images">
							<img src={battery} alt="battery" />
							<img src={camera} alt="camera" />
							<img src={games} alt="games" />
						</div>
						<button className="teamFavorite__button">Add to bag</button>
					</div>

				</div >

				<div className='emptyContainerHigh'></div>
					
				
			</div>
		</>
	)
}

export default TeamFavorite;
