"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = __importDefault(require("@grpc/grpc-js"));
const proto_loader_1 = __importDefault(require("@grpc/proto-loader"));
const dotenv_1 = require("dotenv");
const contants_1 = __importDefault(require("./contants"));
const news_server_1 = __importDefault(require("./modules/news/news.server"));
(0, dotenv_1.config)();
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};
const newsPackageDefinition = proto_loader_1.loadSync(contants_1.default.news, options);
const newsProto = grpc_js_1.loadPackageDefinition(newsPackageDefinition);
const server = new grpc_js_1.Server();
//@ts-expect-error NewsService cannot be detected by tyescript
server.addService(newsProto.service.NewsService, news_server_1.default);
const PORT = process.env.NODE_ENV === "test" ? process.env.TEST_PORT : process.env.PORT;
const HOST = process.env.NODE_ENV === "test" ? process.env.HOST : process.env.HOST;
server.bindAsync(`${HOST}:${PORT}`, grpc_js_1.default.ServerCredentials.createInsecure(), (err) => {
    if (err)
        throw err;
    console.log(`server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map