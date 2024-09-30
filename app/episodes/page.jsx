import Link from "next/link";
import moment from "moment";

async function getEpisodes() {
  const res = await fetch('https://rickandmortyapi.com/api/episode')
  return res.json();
}

async function Episodes() {
  const episodes = await getEpisodes();
  console.log(episodes)
  return (
    <>
      <div className="content-container">
        <h3>All episodes of Rick and Morty</h3>
      </div>
      <div className="card-container">
        {episodes.results.map((episode) => (
          <div className="card" key={episode.id}>
            <div className="card-content">
              <Link href={`/episodes/${episode.id}`}>
                <h3>{episode.name}</h3>
              </Link>
              <p><span className="status unknown"></span> {episode.episode}</p>
              <p><strong>Air date:</strong> {moment(episode.air_date).format('LL')}</p>
              <p><strong>Created:</strong> {moment(episode.created_at).format('LL')}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Episodes;