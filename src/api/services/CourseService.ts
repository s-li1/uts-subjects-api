import { fetchHtmlFromUrl } from "../helpers/helper";

const getSubjects = async(course: string): Promise<any> => {
    try {
        const $ = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`);
        const subjectNames = $(".ie-images").contents().filter((i ,el) => {
            return el.type === 'text';
        })
        .text().trim().replace(/^\s+|\s+$|\s+(?=\s)/g,'').replace(/(\r\n|\n|\r)/gm, ',').split(',');
        return subjectNames;
    }
    catch(error) {
        console.log(error);
    }
}

export { getSubjects };


