import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const episodes = await response.json();

    return NextResponse.json(episodes, {
        status: 200
    });
}