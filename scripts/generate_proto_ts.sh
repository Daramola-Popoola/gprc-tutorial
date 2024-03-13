TS_ARGS=(
    'lowerCaseSerivceMethods=true,'
    'outputEncodeMethods=true,'
    'outputJSONMethods=true,'
    'outputClientImpl=false,'
    'snakeToCamelCase=true'
)

DEST_DIR="C:/grpc/grpc-ts/src/proto_schema/"
SRC_DIR="C:/grpc/grpc-ts/proto/*.proto"

protoc --plugin=protoc-gen-ts_proto=".\\node_modules\\.bin\\protoc-gen-ts_proto.cmd" --ts_proto_opt=lowerCaseSerivceMethods=true,outputEncodeMethods=true,outputJSONMethods=true,outputClientImpl=false,snakeToCamelCase=true --proto_path="C:/grpc/grpc-ts/proto/" --ts_proto_out=${DEST_DIR} ${SRC_DIR}