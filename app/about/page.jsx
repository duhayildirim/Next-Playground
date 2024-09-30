import Link from 'next/link';
import React from 'react';

function About() {
    return (
        <div className="content-container">
            <h1>What is this?</h1>
            <h3>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty.
                You will have access to about hundreds of characters, images, locations and episodes.
                The Rick and Morty API is filled with canonical information as seen on the TV show.</h3>
            <Link className="btn" href="/about/team">
                Who are you?
            </Link>
        </div>
    );
}

export default About;
