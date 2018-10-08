import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Todo } from '../../app/todo';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-todo',
  templateUrl: './todo.html',
  providers: [TodoProvider]
})
export class TodoPage {

  newTodo: Todo = new Todo();

  constructor(private _todoServe: TodoProvider) {

  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoServe.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoServe.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoServe.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoServe.getAllTodos();
  }

}
