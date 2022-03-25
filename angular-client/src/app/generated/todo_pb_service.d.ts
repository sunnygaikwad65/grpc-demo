// package: todoPackage
// file: src/app/protos/todo.proto

// import * as src_app_protos_todo_pb from "../../../src/app/protos/todo_pb";
import * as src_app_protos_todo_pb from "../generated/todo_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ToDocreateToDo = {
  readonly methodName: string;
  readonly service: typeof ToDo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_todo_pb.ToDoItem;
  readonly responseType: typeof src_app_protos_todo_pb.ToDoItem;
};

type ToDoreadToDos = {
  readonly methodName: string;
  readonly service: typeof ToDo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_todo_pb.voidNoParam;
  readonly responseType: typeof src_app_protos_todo_pb.ToDoItems;
};

type ToDoreadToDosStream = {
  readonly methodName: string;
  readonly service: typeof ToDo;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_app_protos_todo_pb.voidNoParam;
  readonly responseType: typeof src_app_protos_todo_pb.ToDoItem;
};

export class ToDo {
  static readonly serviceName: string;
  static readonly createToDo: ToDocreateToDo;
  static readonly readToDos: ToDoreadToDos;
  static readonly readToDosStream: ToDoreadToDosStream;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ToDoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createToDo(
    requestMessage: src_app_protos_todo_pb.ToDoItem,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_todo_pb.ToDoItem|null) => void
  ): UnaryResponse;
  createToDo(
    requestMessage: src_app_protos_todo_pb.ToDoItem,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_todo_pb.ToDoItem|null) => void
  ): UnaryResponse;
  readToDos(
    requestMessage: src_app_protos_todo_pb.voidNoParam,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_todo_pb.ToDoItems|null) => void
  ): UnaryResponse;
  readToDos(
    requestMessage: src_app_protos_todo_pb.voidNoParam,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_todo_pb.ToDoItems|null) => void
  ): UnaryResponse;
  readToDosStream(requestMessage: src_app_protos_todo_pb.voidNoParam, metadata?: grpc.Metadata): ResponseStream<src_app_protos_todo_pb.ToDoItem>;
}

