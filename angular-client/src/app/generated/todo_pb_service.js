// package: todoPackage
// file: src/app/protos/todo.proto

// var src_app_protos_todo_pb = require("../../../src/app/protos/todo_pb");
var src_app_protos_todo_pb = require("../generated/todo_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ToDo = (function () {
  function ToDo() {}
  ToDo.serviceName = "todoPackage.ToDo";
  return ToDo;
}());

ToDo.createToDo = {
  methodName: "createToDo",
  service: ToDo,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_todo_pb.ToDoItem,
  responseType: src_app_protos_todo_pb.ToDoItem
};

ToDo.readToDos = {
  methodName: "readToDos",
  service: ToDo,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_todo_pb.voidNoParam,
  responseType: src_app_protos_todo_pb.ToDoItems
};

ToDo.readToDosStream = {
  methodName: "readToDosStream",
  service: ToDo,
  requestStream: false,
  responseStream: true,
  requestType: src_app_protos_todo_pb.voidNoParam,
  responseType: src_app_protos_todo_pb.ToDoItem
};

exports.ToDo = ToDo;

function ToDoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ToDoClient.prototype.createToDo = function createToDo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDo.createToDo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoClient.prototype.readToDos = function readToDos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDo.readToDos, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoClient.prototype.readToDosStream = function readToDosStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ToDo.readToDosStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ToDoClient = ToDoClient;

