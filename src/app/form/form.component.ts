import { Component, Output, EventEmitter} from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuote = new EventEmitter<Quotation>();

  showForm = true;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  }

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuote() {
    this.newQuote.emit(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    };
  }
}
