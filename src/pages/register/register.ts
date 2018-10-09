import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoPage } from '../todo/todo';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  constructor(public navCtrl: NavController) {

  }

  register() {
    this.navCtrl.push(TodoPage)
  }

}
