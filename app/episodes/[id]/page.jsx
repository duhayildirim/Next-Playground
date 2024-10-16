import Episode from "@/app/components/Episode";
import EpisodeCharacters from "@/app/components/EpisodeCharacters";


function Episod({ params }) {
	const id = params.id;
	return (
		<>
			<Episode id={id} />
			<EpisodeCharacters id={id} />
		</>
	)
}

export default Episod;