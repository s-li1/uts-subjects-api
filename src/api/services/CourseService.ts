import { fetchHtmlFromUrl } from "../helpers/helper";

const getSubjects = async(course: string): Promise<any> => {
    try {
        const data = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`);
        return data.html();
    }
    catch(error) {
        console.log(error);
    }
}

export { getSubjects };


