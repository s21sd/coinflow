import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2024-09-30.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json(); // Directly destructure 'amount'
    
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Convert to cents if needed
      currency: "USD",
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error("Payment Intent creation failed:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 400,
    });
  }
}
