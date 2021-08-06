import { fetchHtmlFromUrl } from "../helpers/helper";

const getSubjects = async(course: string): Promise<any> => {
    try {
        const $ = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`); 
        
        const subjectNames = $(".ie-images").contents().filter((i, el) => el.type === 'text')
        .text().trim().replace(/(\r\n|\n|\r)/gm, ".").split(".");

        let subjectLinksAndIDs: any[] = [];

        $(".ie-images").find("a").each((i, el) => {
            const id = $(el).text();
            if (!isNaN(parseInt(id))) {
                subjectLinksAndIDs.push({
                    id: id,
                    link: $(el).attr("href")
                });
            }
        });

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


