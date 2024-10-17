import Image from "next/image";

async function getCharacters() {
    const res = await fetch('http://localhost:3000/api/characters')
    return res.json();
}

async function Characters() {
    const characters = await getCharacters();

    return (
        <>
            <div className="content-container">
                <h3>All Characters of Rick and Morty</h3>
            </div>
            <div className="card-container">
                {characters.results.map((cha) => (
                    <div className="card" key={cha.id}>
                        <Image src={cha.image} alt={cha.name} width={100} height={100} />
                        <div className="card-content">
                            <h3>{cha.name}</h3>
                            <p><span className="status unknown"></span> {cha.status} - {cha.species} - {cha.gender}</p>
                            <p><strong>Location:</strong> {cha.location.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Characters;