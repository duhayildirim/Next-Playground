import React from 'react'
import moment from "moment";
import Link from 'next/link';

async function getEpisodeCharacters(id) {
    const response = await fetch('https://rickandmortyapi.com/api/episode/' + id);
    const cha = await response.json();

    return cha.characters;
}

async function EpisodeCharacters({ id }) {
    const characters = await getEpisodeCharacters(id);

    return (
        <>
            <div className="episode-detail-content">
                <h3 className="episode-info">Chapter Characters:</h3>
                <ul>
                    {characters.map(character => (
                        <li key={character} style={{ listStyleType: "none" }}>
                            <Link href="/characters"> {character} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EpisodeCharacters