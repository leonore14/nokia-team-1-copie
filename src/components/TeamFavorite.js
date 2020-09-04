import React from 'react';
import './TeamFavorite.css';
import battery from './icons/battery.svg';



function TeamFavorite() {
	return (
		<div className="teamFavorite">
			<div className="teamFavorite__title">
				<h1>Team's favorites</h1>
			</div>

			<div className="teamFavorite__phone1">
				<div className="teamFavorite__carousel1">
					<img src="" alt="" />
				</div>

				<div className="teamFavorite__info1">
					<img src={battery} alt="" />
				</div>
			</div>
		</div>
	)
}

export default TeamFavorite;
