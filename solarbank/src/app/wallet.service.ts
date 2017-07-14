import { Injectable } from '@angular/core';

@Injectable()
export class WalletService {

  public currentRate = 4.05;
  public walletBalance = 26.40;

  constructor() { }

  public sellPower() {
    this.walletBalance = this.currentRate + this.walletBalance
    this.currentRate = 0;
  }

}
