"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewsList = void 0;
const news_dto_1 = require("./news.dto");
const news = { news: news_dto_1.newsDB };
function getNewsList(_, callback) {
    callback(null, news);
}
exports.getNewsList = getNewsList;
const newsMethods = {
    getNewsList: getNewsList
};
exports.default = newsMethods;
//# sourceMappingURL=news.server.js.map