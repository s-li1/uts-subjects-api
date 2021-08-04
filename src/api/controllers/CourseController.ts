import { Request, Response } from 'express';
import { getSubjects } from '../services/CourseService';

const get = async(req: Request, res: Response): Promise<any> => {
    try {
        const { name } = req.params;
        const result = await getSubjects(name);
        res.json({
            data: result
        });
    } catch(error) {
        console.log(error);
    }
}

export { get };