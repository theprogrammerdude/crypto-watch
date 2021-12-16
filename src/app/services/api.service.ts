import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getOhlc(sym: String) {
    const today = moment().toISOString().split('T')[0];
    const yDate = new Date(new Date().setDate(new Date().getDate() - 1));
    const yesterday = moment(yDate).toISOString().split('T')[0];

    // console.log(today, yesterday);

    return this.http.get(
      `https://api.polygon.io/v2/aggs/ticker/X:${sym.toUpperCase()}USD/range/1/minute/${yesterday}/${today}?adjusted=true&sort=asc&limit=5000&apiKey=HHp2vuSN34hY0yRcjwJzkjpihoh7QsyD`
    );
  }

  getMarketData() {
    return this.http.get('https://api.wazirx.com/sapi/v1/tickers/24hr');
  }

  convert(from: string) {
    return this.http.get(
      `https://api.exchangerate.host/convert?from=${from}&to=usd`
    );
  }
}
