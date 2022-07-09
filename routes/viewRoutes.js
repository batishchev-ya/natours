const express = require('express');
const viewsController = require('./../controlers/viewsController');
const authController = require('../controlers/authController');
const bookingController = require('../controlers/bookingController');

const router = express.Router();

// 1 variant
router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignUpForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);

// router.post(
//   '/submit-user-data',
//   authController.protect,
//   viewsController.updateUserData
// );

// 2 variant
// router.get('/me', authController.protect, viewsController.getAccount);
// router.use(authController.isLoggedIn);
// router.get('/',  viewsController.getOverview);
// router.get('/tour/:slug',  viewsController.getTour);
// router.get('/login',  viewsController.getLoginForm);
// router.get('/signup',  viewsController.getSignUpForm);

module.exports = router;
