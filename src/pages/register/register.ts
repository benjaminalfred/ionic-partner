import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoPage } from '../todo/todo';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }

  goHome() {
    this.navCtrl.push(TodoPage)
  }
}
