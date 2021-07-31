import fetchHtmlFromUrl from '../helper/helper';

const getSubjectsByCourse = async(course: string) => {
    try {
        const data = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`)
        console.log(data.html());
        return data.html();
    }
    catch(error) {
        console.log(error);
    }
}

export default getSubjectsByCourse;