import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  public data: any[] = [
    {
      kind: 'Consumption', share: 0.2, color: '#5eebf4'
    },
    {
      kind: 'Generation', share: 0.8, color: '#001CB0'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public labelContent(e: any): string {
    return e.category;
  }

}
