import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inr',
  templateUrl: './inr.component.html',
  styleUrls: ['./inr.component.css'],
})
export class InrComponent implements OnInit {
  @Input() data: Array<any> = [];
  faRupeeSign = faRupeeSign;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}
}
