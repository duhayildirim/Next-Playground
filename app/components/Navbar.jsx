import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        Rick And Morty
                    </Link>
                </div>
                <div className="links">
                    <Link href="/characters">Characters</Link>
                    <Link href="/episodes">Episodes</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar