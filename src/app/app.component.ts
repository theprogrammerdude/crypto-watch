import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  inr: Array<any> = [];
  btc: Array<any> = [];
  usdt: Array<any> = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    setInterval(() => {
      this.marketData();
    }, 1500);
  }

  marketData() {
    this.apiService.getMarketData().subscribe((d: any) => {
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
