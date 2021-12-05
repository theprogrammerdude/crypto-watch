import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  inr: Array<any> = [];
  btc: Array<any> = [];
  usdt: Array<any> = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {
    setInterval(() => {
      this.marketData();
    }, 2000);
  }

  marketData() {
    this.http
      .get('https://api.wazirx.com/sapi/v1/tickers/24hr')
      .subscribe((d: any) => {
        this.inr = [];
        this.btc = [];
        this.usdt = [];

        d.forEach((e: any) => {
          if (e.quoteAsset === 'inr') this.inr.push(e);
          if (e.quoteAsset === 'btc') this.btc.push(e);
          if (e.quoteAsset === 'usdt') this.usdt.push(e);
        });
      });
  }
}
