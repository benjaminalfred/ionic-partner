import { Injectable } from '@angular/core';
import { Todo } from '../../app/todo';

@Injectable()
export class TodoProvider {

  lastId: number = 0;

  todos: Todo[] = [];
  numberOfDos: number = 0;
  loggedIn: boolean = false;


  constructor() { }

  //Simulate POST /todos
  addTodo(todo: Todo): TodoProvider {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
    this.numberOfDos++;
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoProvider {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    if (todo.complete === true) {
      this.numberOfDos--;
    }
    if (todo.complete === false) {
      this.numberOfDos++;
    }
    return updatedTodo;
  }

}
