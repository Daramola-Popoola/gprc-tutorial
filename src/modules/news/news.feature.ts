import { Empty, NewsList, NewsService } from "../../proto_schema/news";
import { newsDB } from "./news.dto";

export class NewsFeature implements NewsService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async GetNews(_request: Empty): Promise<NewsList> {
        const news = {news: newsDB};
        return news;
    }
    
}

export const NewsServices = {
    GetNews: new NewsFeature().GetNews({})
}
