DEST_DIR="C:/grpc/grpc-ts-client/src/proto_schema/"
SRC_DIR="C:/grpc/grpc-ts/proto/*.proto"

protoc --plugin=protoc-gen-ts_proto=".\\node_modules\\.bin\\protoc-gen-ts_proto.cmd" --ts_proto_opt=lowerCaseServiceMethods=true,outputServcies=grpc-js,snakeToCamel=true --proto_path="C:/grpc/grpc-ts/proto/" --ts_proto_out=${DEST_DIR} ${SRC_DIR}