import { Request, Response } from 'express';
const CourseService = require('../services/CourseService');

const get = async(req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const result = await CourseService.getSubjects(name);
        res.json({
            data: result
        });
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    get
}