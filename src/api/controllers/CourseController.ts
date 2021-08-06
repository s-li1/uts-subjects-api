import { Request, Response } from 'express';
import { ISubject } from '../../types/types';
import { getSubjects } from '../services/CourseService';

const get = async(req: Request, res: Response): Promise<ISubject | void> => {
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