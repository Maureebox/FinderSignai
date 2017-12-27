import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinderPage } from '../finder/finder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

find(){
  this.navCtrl.push(FinderPage);
}

}
