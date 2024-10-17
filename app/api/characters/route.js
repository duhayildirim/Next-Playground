import { NextResponse } from "next/server";

export async function GET(request) {

    const { searchParmas } = new URL(request.url);
    const page = searchParmas.get('page');

    const response = await fetch('https://rickandmortyapi.com/api/character/?page=' + page);
    const characters = await response.json();

    return NextResponse.json(characters, {
        status: 200
    });
}