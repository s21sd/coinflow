import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-api-key': 'CG-vtyAUcrFrJKxcTdRBEwtHxRn',
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in the API', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}


// export async function GET() {
//     return NextResponse.json({
//         hellow: "World"
//     })
// }