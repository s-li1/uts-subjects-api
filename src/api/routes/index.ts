import express from 'express';
const CourseRoute = require('./CourseRoute');
const router = express.Router();

router.use('/course', CourseRoute);

module.exports = router;