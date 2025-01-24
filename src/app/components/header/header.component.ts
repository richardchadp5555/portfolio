import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  pageTitle = 'Welcome to my Portfolio project with Angular';
  constructor() {}

  onDataCheck(e: any) {
    console.log(e);
  }
}
