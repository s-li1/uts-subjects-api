import { Request, Response } from 'express';
const CourseService = require('../services/CourseService');

const get = async(req: Request, res: Response) => {
    const { name } = req.params;
    const result = await CourseService.getSubjects(name);
    res.json({
        data: result
    });
}

module.exports = {
    get
}