import { Component, Input, OnInit } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inr',
  templateUrl: './inr.component.html',
  styleUrls: ['./inr.component.css'],
})
export class InrComponent implements OnInit {
  @Input() data: Array<any> = [];
  faRupeeSign = faRupeeSign;

  constructor() {}

  ngOnInit(): void {}
}
