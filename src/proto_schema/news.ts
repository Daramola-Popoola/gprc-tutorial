/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty as Empty1 } from "./google/protobuf/Empty";

export const protobufPackage = "";

export interface News {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface Empty {
}

export interface NewsList {
  news: News[];
}

function createBaseNews(): News {
  return { id: "", title: "", body: "", createdAt: "" };
}

export const News = {
  encode(message: News, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): News {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNews();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.body = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): News {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
    };
  },

  toJSON(message: News): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<News>, I>>(base?: I): News {
    return News.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<News>, I>>(object: I): News {
    const message = createBaseNews();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseNewsList(): NewsList {
  return { news: [] };
}

export const NewsList = {
  encode(message: NewsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.news) {
      News.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewsList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.news.push(News.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewsList {
    return { news: globalThis.Array.isArray(object?.news) ? object.news.map((e: any) => News.fromJSON(e)) : [] };
  },

  toJSON(message: NewsList): unknown {
    const obj: any = {};
    if (message.news?.length) {
      obj.news = message.news.map((e) => News.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NewsList>, I>>(base?: I): NewsList {
    return NewsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NewsList>, I>>(object: I): NewsList {
    const message = createBaseNewsList();
    message.news = object.news?.map((e) => News.fromPartial(e)) || [];
    return message;
  },
};

export interface NewsService {
  GetNews(request: Empty1): Promise<NewsList>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
