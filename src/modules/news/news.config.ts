import { NewsService, NewsList } from "../../proto_schema/news";

export const NewsModel: NewsService = {
    GetNews: function (): Promise<NewsList> {
        throw new Error('Function not implemented.');
    }
}