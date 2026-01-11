import Stripe from "stripe";

// Only initialize Stripe if secret key is provided
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-06-30.basil",
      typescript: true,
    })
  : null;
