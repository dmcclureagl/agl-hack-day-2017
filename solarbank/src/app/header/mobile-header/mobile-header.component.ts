import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  @Output() isSlidingMenuOpened = new EventEmitter();

  public isMenuOpened = false;

  @HostListener('document:click', ['$event.target.classList']) onClick(classList) {
    if (!classList.contains('sliding-menu')) {
      this.isMenuOpened = !this.isMenuOpened;
    }
  }

  constructor() { }

  public ngOnInit() {
  }

  public toggleSlidingMenu() {
    this.isSlidingMenuOpened.emit(this.isMenuOpened);
  }
}
