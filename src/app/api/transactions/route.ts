import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const transactions = await stripe.balanceTransactions.list({
            limit: 100,
        });

        return NextResponse.json({
            status: 200,
            message: "Fetched Transactions",
            transactions
        })

    } catch (error: any) {
        console.error('Error fetching Stripe transactions:', error);
        return NextResponse.json({
            status: 503,
            message: "Fetched Failed ",
            error: error.message
        })
    }

}
