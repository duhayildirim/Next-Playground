"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../loading";

// async function getCharacters() {
//     const res = await fetch('http://localhost:3000/api/characters')
//     return res.json();
// }

async function Characters() {
    // const characters = await getCharacters();

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getCharacters = async (page) => {
            const res = await fetch('http://localhost:3000/api/characters?page=' + page);
            const data = await res.json();
            setCharacters(data);

            setLoading(false)
        }

        getCharacters(page)
    }, [page])

    

    const handleNext = (e) => {
        e.preventDefault();
        setPage(page + 1);
    }

    const handleBack = (e) => {
        e.preventDefault();
        setPage(page - 1);
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="content-container">
                <h3>All Characters of Rick and Morty</h3>
                <p><small>Page {page}</small></p>
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
            <div className="content-container">
                {characters.info.prev && <button className="btn" onClick={handleBack}>Back</button>}
                {characters.info.next && <button className="btn" onClick={handleNext}>Next</button>}
            </div>
        </>

    )
}

export default Characters;