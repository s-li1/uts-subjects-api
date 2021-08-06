import { fetchHtmlFromUrl } from "../helpers/helper";

interface ISubject {
    id: number,
    link: string,
    name: string
}

const getSubjects = async(course: string): Promise<ISubject[] | undefined> => {
    try {
        const $ = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`); 
        
        const subjectNames = $(".ie-images").contents().filter((i, el) => el.type === 'text')
        .text().trim().replace(/(\r\n|\n|\r)/gm, ".").split(".");

        let subjectLinksAndIDs: { id: number, link: string }[] = [];

        $(".ie-images").find("a").each((i, el) => {
            const id = parseInt($(el).text());
            if (!isNaN(id)) {
                subjectLinksAndIDs.push({
                    id: id,
                    link: $(el).attr("href") as string
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


