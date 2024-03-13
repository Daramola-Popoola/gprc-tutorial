import * as NewsClient from "../../client";

export class NewsController {
    
    async getAllNews (request: void){
        NewsClient.getNews(request, (err, response) => {
            if(err) throw err;
            
            console.log(response);
        })
    }
}

export const NewsImplementor = () => {
    new NewsController().getAllNews();
}

