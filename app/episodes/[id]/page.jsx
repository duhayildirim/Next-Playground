import Episode from "@/app/components/Episode";
import EpisodeCharacters from "@/app/components/EpisodeCharacters";
import { Suspense } from "react";


function Episod({ params }) {
	const id = params.id;
	return (
		<>
			<Episode id={id} />
			<Suspense fallback={<div class="spinner"></div>}>
				<EpisodeCharacters id={id} />
			</Suspense>
		</>
	)
}

export default Episod;