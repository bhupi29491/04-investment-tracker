import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';

@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.component.css',
  templateUrl: './user-input.component.html',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturnRate = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturnRate,
      duration: +this.enteredDuration,
    });
  }
}
