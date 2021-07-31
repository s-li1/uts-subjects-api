import express from 'express';
import getSubjectsByCourse from './subjects/subjects';

const app = express();

app.get('/api/v1/course/:name', async (req, res) => {
    const data = await getSubjectsByCourse(req.params.name);
    res.json({
        data: data
    });
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});