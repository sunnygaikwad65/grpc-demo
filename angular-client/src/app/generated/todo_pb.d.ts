// package: todoPackage
// file: src/app/protos/todo.proto

import * as jspb from "google-protobuf";

export class voidNoParam extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): voidNoParam.AsObject;
  static toObject(includeInstance: boolean, msg: voidNoParam): voidNoParam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: voidNoParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): voidNoParam;
  static deserializeBinaryFromReader(message: voidNoParam, reader: jspb.BinaryReader): voidNoParam;
}

export namespace voidNoParam {
  export type AsObject = {
  }
}

export class ToDoItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToDoItem.AsObject;
  static toObject(includeInstance: boolean, msg: ToDoItem): ToDoItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToDoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToDoItem;
  static deserializeBinaryFromReader(message: ToDoItem, reader: jspb.BinaryReader): ToDoItem;
}

export namespace ToDoItem {
  export type AsObject = {
    id: number,
    text: string,
  }
}

export class ToDoItems extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<ToDoItem>;
  setItemsList(value: Array<ToDoItem>): void;
  addItems(value?: ToDoItem, index?: number): ToDoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToDoItems.AsObject;
  static toObject(includeInstance: boolean, msg: ToDoItems): ToDoItems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToDoItems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToDoItems;
  static deserializeBinaryFromReader(message: ToDoItems, reader: jspb.BinaryReader): ToDoItems;
}

export namespace ToDoItems {
  export type AsObject = {
    itemsList: Array<ToDoItem.AsObject>,
  }
}

