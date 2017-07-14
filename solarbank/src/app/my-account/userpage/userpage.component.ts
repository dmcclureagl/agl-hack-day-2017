import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../../logged-in.service';
import { WalletService } from '../../wallet.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  public name;
  public openDialog;
  public balance;
  public rate = this.walletService.currentRate;

  public data: any[] = [
    {
      kind: 'Consumption', share: 0.2, color: '#5eebf4'
    },
    {
      kind: 'Generation', share: 0.8, color: '#001CB0'
    }
  ];

  constructor(
    private loggedInService: LoggedInService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    this.name = this.loggedInService.name;
    this.balance = this.walletService.walletBalance;
  }

  public labelContent(e: any): string {
    return e.category;
  }

  public sellNow() {
    this.openDialog = true;
  }

  public onAccept() {
    this.openDialog = false;
    this.walletService.sellPower();
    this.rate = this.walletService.currentRate;
    this.balance = this.walletService.walletBalance;
  }

  public onDecline() {
    this.openDialog = false;
  }

}
