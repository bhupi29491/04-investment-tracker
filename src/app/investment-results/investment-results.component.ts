import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investment-results',
  styleUrl: './investment-results.component.css',
  templateUrl: './investment-results.component.html',
})
export class InvestmentResultsComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
