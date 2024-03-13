import * as grpc from '@grpc/grpc-js';
// import protoLoader from '@grpc/proto-loader';
import { config } from 'dotenv';
// import PROTO_PATH from './contants';
// import newsMethods from './modules/news/news.server';
import { NewsFeature, NewsServices } from './modules/news/news.feature';
import { NewsModel } from './modules/news/news.config';

config();

const server = new grpc.Server();


// eslint-disable-next-line 
//@ts-ignore
server.addService(NewsModel, new NewsFeature());

const PORT = process.env.NODE_ENV === "test" ? process.env.TEST_PORT : process.env.PORT;
const HOST = process.env.NODE_ENV === "test" ? process.env.TEST_HOST : process.env.HOST;

server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err) => {
    if(err) throw err;
    
    console.log(`server is running on port ${PORT}`);
})

