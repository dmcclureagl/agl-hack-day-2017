import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.css'],
})
export class SliderMenuComponent implements OnInit {
  @Input() isMenuOpened;

   public elementRef;

   constructor(myElement: ElementRef) {
       this.elementRef = myElement;
   }

  @HostListener('document:click', ['$event']) onClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (inside) {
    } else if (!inside) {
        this.isMenuOpened = false;
    }

    if (event.target.classList.contains('header-burger')) {
      this.isMenuOpened = true;
    }
  }

  ngOnInit() {
  }

}
