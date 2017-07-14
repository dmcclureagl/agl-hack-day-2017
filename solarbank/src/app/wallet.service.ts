import { Injectable } from '@angular/core';

@Injectable()
export class WalletService {

  public currentRate = 50;
  public walletBalance = 100;

  constructor() { }

  public sellPower() {
    this.walletBalance = this.currentRate + this.walletBalance
    this.currentRate = 0;
  }

}
