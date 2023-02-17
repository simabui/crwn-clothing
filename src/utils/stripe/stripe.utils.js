import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(process.env.REACT_APP_NOT_SECRET_CODE);
