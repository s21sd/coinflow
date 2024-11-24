import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });

        console.log('Response Status:', response.status); // Log status
        const text = await response.text(); // Log the raw response
        console.log('Response Body:', text);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = JSON.parse(text);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in the API:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
