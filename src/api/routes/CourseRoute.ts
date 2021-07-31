import express from 'express';
const CourseController = require('../controllers/CourseController');

const router = express.Router();

router.get('/:name', CourseController.get);

module.exports = router;


