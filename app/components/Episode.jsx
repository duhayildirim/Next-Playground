import React from 'react'
import moment from "moment";

async function getEpisode(id) {
	const response = await fetch('https://rickandmortyapi.com/api/episode/' + id);
	const ep = await response.json();

	return ep;
}

async function Episode({ id }) {
	const episode = await getEpisode(id);

	return (
		<>
			<div className="episode-detail-content">
				<h1 className="episode-title">{episode.name} </h1>
				<p className="episode-info"><strong>Episode:</strong> {episode.episode}</p>
				<p className="episode-info"><strong>Air Date:</strong> {moment(episode.air_date).format('LL')} </p>

				<h3 className="characters-title">This episode featured {episode.characters.length} different characters.</h3>
			</div>
		</>
	)
}

export default Episode