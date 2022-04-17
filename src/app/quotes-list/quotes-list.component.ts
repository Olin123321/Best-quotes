import { Component, Input, OnInit } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent{

  @Input()
  quotes!: Quotation[];

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
