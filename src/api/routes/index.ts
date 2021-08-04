import express from 'express';
import CourseRouter from './CourseRoute';

const router = express.Router();

router.use('/courses', CourseRouter);

export default router;