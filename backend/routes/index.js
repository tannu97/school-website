const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const admissionController = require('../controllers/admissionController');
const contactController = require('../controllers/contactController');
const newsController = require('../controllers/newsController');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Public routes
router.post('/admissions', [
  body('student_name').notEmpty().trim(),
  body('parent_name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('phone').notEmpty(),
  body('grade_applying').notEmpty(),
  body('date_of_birth').isDate(),
], admissionController.submitAdmission);

router.post('/contact', [
  body('name').notEmpty().trim(),
  body('email').isEmail(),
  body('subject').notEmpty(),
  body('message').notEmpty(),
], contactController.submitContact);

router.get('/news', newsController.getNews);
router.get('/news/:slug', newsController.getNewsById);
router.get('/faculty', authController.getFaculty);
router.get('/testimonials', authController.getTestimonials);

// Auth
router.post('/auth/login', authController.login);

// Protected admin routes
router.post('/auth/register', auth, authController.register);
router.get('/admin/admissions', auth, admissionController.getAdmissions);
router.patch('/admin/admissions/:id/status', auth, admissionController.updateAdmissionStatus);
router.get('/admin/contacts', auth, contactController.getContacts);
router.get('/admin/stats', auth, authController.getStats);

module.exports = router;
