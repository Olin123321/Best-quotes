import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  };

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuote() {
    this.quotes.unshift(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    };
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
