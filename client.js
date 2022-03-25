const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.ToDo("localhost:8080", grpc.credentials.createInsecure());
const text = process.argv[2];
client.createToDo({
    "id": -1,
    "text": text
}, (err, res) => {
    console.log("ToDO Created", JSON.stringify(res));
});


client.readToDos({}, (err, res) => {

    if (res) {
        console.log("ALL TODOS", JSON.stringify(res));

    }
})

const call = client.readToDosStream();
call.on("data", item => {
    console.log("FRON SER", JSON.stringify(item))
})

call.on("end", e => console.log("Server Done..!!!"))
