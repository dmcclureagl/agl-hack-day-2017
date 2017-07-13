import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private loggedInService: LoggedInService
  ) { }

  ngOnInit() {
  }

  public login() {
    this.loggedInService.logIn();
  }

}
