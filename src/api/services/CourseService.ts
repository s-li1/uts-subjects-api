import { fetchHtmlFromUrl } from "../helpers/helper";

const getSubjects = async(course: string): Promise<any> => {
    try {
        const $ = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`);
        const subjectNames = $(".ie-images").contents().filter((i ,el) => {
            return el.type === 'text';
        })
        .text().trim().replace(/(\r\n|\n|\r)/gm, ".").split(".");
        let subjectAnchorLinks: any[] = [];
        $(".ie-images").find('a').each((i, el) => {
            subjectAnchorLinks.push({
                id: $(el).text(),
                link: $(el).attr('href')
            });
        });
        const subjectLinksAndIDs = subjectAnchorLinks.filter(subject => !isNaN(subject.id));
        return subjectLinksAndIDs.map((subject, index) => {
            return {
                ...subject,
                name: subjectNames[index]
            }
        });
    }
    catch(error) {
        console.log(error);
    }
}

export { getSubjects };


