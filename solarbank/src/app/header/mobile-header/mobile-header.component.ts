import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  public isMenuOpened = false;

  constructor() { }

  public ngOnInit() {
    console.log('init', this.isMenuOpened);
  }

  public openSlidingMenu() {
    this.isMenuOpened = true;
    console.log('clicked', this.isMenuOpened);
  }
}
