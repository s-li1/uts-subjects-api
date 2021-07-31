import express from 'express';
const CourseRoute = require('./CourseRoute');
const router = express.Router();

router.use('/courses', CourseRoute);

module.exports = router;