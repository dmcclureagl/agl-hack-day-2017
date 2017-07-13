import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loggedInService: LoggedInService
  ) { }

  ngOnInit() {
  }

  public loginName() {
    if (this.loggedInService.loggedin) {
      return `Welcome ${this.loggedInService.name}`;
    } else {
      return 'LOGIN';
    }
  }

  public isAuthenticated() {
    if (this.loggedInService.loggedin) {
      return true;
    } else {
      return false;
    }
  }

  public login() {
    this.loggedInService.logIn();
  }

}
