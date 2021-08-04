import express from 'express';
import { get } from '../controllers/CourseController'

const CourseRouter = express.Router();

CourseRouter.get('/:name', get);

export default CourseRouter;


