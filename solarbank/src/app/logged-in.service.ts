import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInService {

  public loggedin = false;
  public name = 'Jess';

  constructor() { }

  logIn() {
    this.loggedin = true;
  }

}
