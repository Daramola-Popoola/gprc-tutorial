import { newsDB } from "./news.dto";


const news = {news: newsDB};
export function getNewsList(_, callback){
    callback(null, news);
}

const newsMethods = {
    getNewsList: getNewsList
}

export default newsMethods;