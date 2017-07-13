import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // do not show the dialog initially
  public opened: boolean = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
