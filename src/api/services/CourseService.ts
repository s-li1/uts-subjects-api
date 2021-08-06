import { ISubject } from "../../types/types";
import { fetchHtmlFromUrl } from "../helpers/helper";

const getSubjects = async(course: string): Promise<ISubject[] | void> => {
    try {
        const $ = await fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`); 
        
        const subjectNames = $(".ie-images").contents().filter((i, el) => el.type === 'text')
        .text().trim().replace(/(\r\n|\n|\r)/gm, "|").split("|").filter(name => name);

        let subjectLinksAndIDs: { id: number, link: string }[] = [];

        $(".ie-images").find("a").each((i, el) => {
            const id = parseInt($(el).text());
            if (!isNaN(id) && !$(el).attr("href")?.includes("#") && !$(el).attr("id")) {
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


