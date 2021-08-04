import cheerio from 'cheerio';
import axios from 'axios';

const fetchHtmlFromUrl = async(url: string): Promise<cheerio.Root> => {
    try {
        const data = await axios.get(url).then(response => cheerio.load(response.data));
        return data;
    } catch(error) {
        throw error;
    }
}

export { fetchHtmlFromUrl };