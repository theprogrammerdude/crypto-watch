import { Component, Input, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usdt',
  templateUrl: './usdt.component.html',
  styleUrls: ['./usdt.component.css'],
})
export class UsdtComponent implements OnInit {
  @Input() data: Array<any> = [];
  faDollarSign = faDollarSign;

  constructor() {}

  ngOnInit(): void {}
}
