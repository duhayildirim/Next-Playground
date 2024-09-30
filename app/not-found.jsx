import React from 'react'
import Link from 'next/link';

function NotFound() {
    return (
        <div className="content-container">
            <h4>upss...</h4>
            <h1 className="ups">404</h1>
            <h2>This page could not be found.</h2>
            <Link href="/" className="btn">
                Home
            </Link>
        </div>
    )
}

export default NotFound;