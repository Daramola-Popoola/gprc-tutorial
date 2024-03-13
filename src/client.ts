import { credentials, makeGenericClientConstructor } from "@grpc/grpc-js";
import { NewsServiceClientImpl } from "./proto_schema/news";

// eslint-disable-next-line 
//@ts-ignore
const NewsServiceClient = makeGenericClientConstructor(NewsServiceClientImpl);
const NewsClient = new NewsServiceClient("localhost:4000", credentials.createInsecure());



export default NewsClient;
