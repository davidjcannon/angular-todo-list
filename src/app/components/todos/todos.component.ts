import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { AngularFireDatabase, AngularFireObject, AngularFireList  } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from "@Angular/forms";
import * as firebase from 'firebase/database';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  inputTodo:string = "";

  todos: any[] = [];

  constructor(db: AngularFireDatabase) {
    db.list('/todos')
    .valueChanges()
    .subscribe(todos => {
      this.todos = todos;
      console.log(this.todos);
  })
}

  toggleDone(id: number) {
this.todos.map((v, i) => {
  if (i == id) v.completed = !v.completed;

  return v;
})
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v,i) => i != id);
    }

    addTodo() {
      if (this.inputTodo != "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })}
      this.inputTodo = "";
    }
}
