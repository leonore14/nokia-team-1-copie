import React from 'react';
import './TeamFavorite.css';
import battery from './icons/battery_white.png';
import camera from './icons/camera_white.png';
import games from './icons/games_white.png';
import { Button } from '@material-ui/core';




function TeamFavorite ({ picture1, picture2, picture3, modelName }) {
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
								<h3><strong>Price: 100$</strong></h3>
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
							<button className="teamFavorite__button">Add to bag</button>
					</div>
					
				</div >
			</div>
			
			<div className='emptyContainer'></div>
			<div className='emptyContainer'></div>


				<div className="teamFavorite__phone2">


					<div className="teamFavorite__center2">
						<img src="" alt="" />
					</div>

					<div className="teamFavorite__infoRight2">
							<div className="teamFavorit__descr">

								<h3><strong>Model Name</strong></h3>
								<br />
								<h3><strong>Price: 100$</strong></h3>
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
							<button className="teamFavorite__button">Add to bag</button>
					</div>


				<div className='emptyContainer'></div>
				<div className='emptyContainer'></div>

				<div className="teamFavorite__phone3">

					<div className="teamFavorite__center3">
						<img src="" alt="" />
					</div>

					<div className="teamFavorite__infoRight3">
						<div className="teamFavorit__descr">

							<h3><strong>Model Name</strong></h3>
							<br />
							<h3><strong>Price: 100$</strong></h3>
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
						<button className="teamFavorite__button">Add to bag</button>
					</div>

				</div >

				<div className='emptyContainerHigh'></div>
					
				
			</div>
		</>
	)
}

export default TeamFavorite;
