import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoPage } from '../todo/todo';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any = {
    email: "",
    password: ""

  };

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
  }

  login() {
    this.navCtrl.push(TodoPage)
  }
  toRegister() {
    this.navCtrl.push(RegisterPage);
  }


}


