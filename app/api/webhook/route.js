import { connectMongo } from "@/libs/mongoose";
import User from "@/Models/User";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
// This is how you verify that the customer has subscription and grant them access to the software
export async function POST(req) {
  try {
    // 1 verify webhook is from stripe
    const stripe = new Stripe(process.env.STRIPE_API_KEY);
    const body = await req.text();
    const signature = headers().get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
    const { data, type } = event;

    if (type === "checkout.session.completed") {
      // grant access

      await connectMongo();

      const user = await User.findById(data.object.client_reference_id);

      user.hasAccess = true;
      user.customerId = data.object.customer;
      await user.save();
    } else if (type === "customer.subscription.deleted") {
      await connectMongo();

      const user = await user.findOne({
        customerId: data.object.customer,
      });

      user.hasAccess = false;
      await user.save();
    }
  } catch (e) {
    console.error("Stripe Error: " + e?.message);
  }
  return NextResponse.json({});
}
