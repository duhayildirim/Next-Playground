import Episode from "@/app/components/Episode";


function Episod({ params }) {
	const id = params.id;
	return (
		<Episode id={id} />
	)
}

export default Episod;