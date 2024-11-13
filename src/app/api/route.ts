import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';
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
        console.log(response);

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


// const stripe = new Stripe("sk_test_51QBNF4AlIDCy873ZvSLRQ5LRvBqV7o3NwavFnFMl8zAjQ8CbAXpLhfBvREcuF6s5ZR4wcwWjdddFpbQLSFLXg1od00Go9ZQfwi", {
//     apiVersion: '2022-11-15',
// });
// export async function POST(req: NextRequest) {
//     try {
//         // const body = await req.json();
//         // const amount = body.amount || 1099;

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: 4000,
//             currency: 'usd',
//             payment_method_types: ['card']
//         });

//         return NextResponse.json({ client_secret: paymentIntent.client_secret });
//     } catch (error: any) {
//         console.error('Error creating payment intent:', error.message);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
