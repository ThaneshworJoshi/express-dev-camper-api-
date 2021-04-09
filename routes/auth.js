const express = require('express');
const {
  register,
  login,
  getMe,
  logout,
  updateDetails,
  resetPassword,
  updatePassword,
  forgotPassword,
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.post('/register', register);
router.post('/forgotpassword', forgotPassword);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
