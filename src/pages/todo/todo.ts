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
  numberOfDos: number = 0;

  constructor(private _todoPro: TodoProvider) {

  }

  addTodo() {
    if (!this.newTodo.title) {
      return;
    }

    this._todoPro.addTodo(this.newTodo);
    this.newTodo = new Todo();
    this.numberOfDos++;
  }

  toggleTodoComplete(todo) {
    this._todoPro.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoPro.deleteTodoById(todo.id);
    if (todo.complete === false) {
      this._todoPro.numberOfDos--;
    }
  }

  get todos() {
    return this._todoPro.getAllTodos();
  }

}
