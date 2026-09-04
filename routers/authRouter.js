const express = require('express');
const authContoller = require('../controllers/authController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.post('/signup' , authContoller.signup)
router.post('/signin' , authContoller.signin)
router.post('/signout' , identifier,authContoller.signout)

router.patch('/send-verification-code' ,identifier, authContoller.sendVerificationCode)
router.patch('/verify-verification-code' , identifier,authContoller.verifyVerificationCode)
router.patch('/change-password' , identifier,authContoller.changePassword)
router.patch('/send-forgot-password-code' , authContoller.sendForgotPasswordCode)
router.patch('/verify-forgot-password-code' , authContoller.verifyForgotPasswordCode)

module.exports = router;