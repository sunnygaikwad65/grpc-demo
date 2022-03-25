
import {grpc} from "@improbable-eng/grpc-web";
import { Component, OnInit } from '@angular/core';

import {ToDo} from "./generated/todo_pb_service";
import {voidNoParam, ToDoItem , ToDoItems} from "./generated/todo_pb";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'angular-client';


  ngOnInit() {
    const readToDosRequest = new voidNoParam();

    grpc.unary(ToDo.readToDos, {
      request: readToDosRequest,
      host: "http://localhost:40000", //https://grpcwebdemo.azurewebsites.net (Windows App Service)
      onEnd: res => {
        const { status, message } = res;
        console.log(status,"MESSAGE", message)

        if (status === grpc.Code.OK && message) {
        // var result = message.toObject() as CountriesReply.AsObject;
        // this.countries = result.countriesList.map(country => 
        //   <CountryModel>({
        //     name: country.name,
        //     description: country.description
        //   }));
        }
      }
    });
  }
}
