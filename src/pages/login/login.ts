import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoPage } from '../todo/todo';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
  }

  goHome() {
    this.navCtrl.push(TodoPage)
  }


}


