import { NextRequest, NextResponse } from "next/server";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'x-cg-pro-api-key': 'CG-vtyAUcrFrJKxcTdRBEwtHxRn',
    },
};

export default async function handler(req: NextRequest, res: NextResponse) {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', options);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in the API', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
