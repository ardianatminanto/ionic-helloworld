import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // membuat sebuah variabel string
  myVariable: string = 'Selamat datang di Inixindo!';

  // membuat sebuah event
  updateMyValue(){
    this.myVariable = 'Belajar Ionic Framework!';
  }
}
