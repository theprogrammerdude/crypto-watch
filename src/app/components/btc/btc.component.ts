import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btc',
  templateUrl: './btc.component.html',
  styleUrls: ['./btc.component.css'],
})
export class BtcComponent implements OnInit {
  @Input() data: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
