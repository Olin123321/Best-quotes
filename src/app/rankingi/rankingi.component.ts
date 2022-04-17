import { Component, Input } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-rankingi',
  templateUrl: './rankingi.component.html',
  styleUrls: ['./rankingi.component.css']
})
export class RankingiComponent {

  @Input()
  quotes!: Quotation[];

  @Input()
  title: string | undefined;
}
