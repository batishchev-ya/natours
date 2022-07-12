/* eslint-disable */
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51LIAgUKIRyQuaqxolcFYAWrUpygUozh1DrRimha3s0MuVE5vCbBCg92JmKiv0qGHq49xaGTOsMtMP5ohl9drzCgC00BhdlMQAU'
);

export const bookTour = async (tourID) => {
  try {
    // 1) Get checkout sesion from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourID}`);
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log('Error in Stripe.js', err);
  }
};
