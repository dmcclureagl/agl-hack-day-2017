import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private loggedInService: LoggedInService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    this.loggedInService.logIn();
    this.router.navigateByUrl('home');
  }

}
