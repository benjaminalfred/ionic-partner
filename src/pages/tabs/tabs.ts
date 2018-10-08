import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { TodoPage } from '../todo/todo';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = RegisterPage;
  tab3Root = TodoPage;

  constructor(public todoPro: TodoProvider) {

  }
}
