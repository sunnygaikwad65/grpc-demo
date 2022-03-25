const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;


const server = new grpc.Server();
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), (err) => {
    if (err) {
        console.log("ERROR IN BIND", err)
    }

    console.log("Server runing on Port "+40000)
    server.start()
});
server.addService(todoPackage.ToDo.service,
    {
        "createToDo": createToDo,
        "readToDos": readToDos,
        "readToDosStream":readToDosStream
    });

const todos = [];
function createToDo(call, callback) {
    const todoItem = {
        "id": todos.length + 1,
        "text": call.request.text
    }
    todos.push(todoItem)
    callback(null, todoItem);
}

function readToDos(call, callback) {
    callback(null, {"items":todos})
}

function readToDosStream(call, callback){
    todos.forEach(t=>{
        call.write(t);
    })
    call.end();
}