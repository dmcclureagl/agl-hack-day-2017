import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  public name;

  public data: any[] = [
    {
      kind: 'Consumption', share: 0.2, color: '#5eebf4'
    },
    {
      kind: 'Generation', share: 0.8, color: '#001CB0'
    }
  ];

  constructor(
    private loggedInService: LoggedInService
  ) { }

  ngOnInit() {
    this.name = this.loggedInService.name;
  }

  public labelContent(e: any): string {
    return e.category;
  }

}
