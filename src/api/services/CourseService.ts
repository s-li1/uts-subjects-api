const Helper = require('../helpers/helper');

const getSubjects = async(course: string) => {
    try {
        const data = await Helper.fetchHtmlFromUrl(`https://www.handbook.uts.edu.au/${course}/lists/alpha.html`);
        console.log(data.html());
        return data.html();
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getSubjects
};


