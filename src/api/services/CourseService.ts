const Helper = require('../helpers/helper');

const getSubjects = async(course: string): Promise<any> => {
    try {
        const data = await Helper.fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`);
        return data.html();
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getSubjects
};


