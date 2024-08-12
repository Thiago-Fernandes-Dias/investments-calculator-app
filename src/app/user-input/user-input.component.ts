import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from '../investments-results.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentResultsService: InvestmentResultsService = inject(InvestmentResultsService)

  onSubmit(): void {
    const params = {
      duration: parseInt(this.enteredDuration),
      annualInvestment: parseInt(this.enteredAnnualInvestment),
      initialInvestment: parseInt(this.enteredInitialInvestment),
      expectedReturn: parseInt(this.enteredExpectedReturn),
    }
    this.investmentResultsService.calculateInvestmentResults(params);
  }

  enteredDuration = '10'
  enteredAnnualInvestment = '0'
  enteredInitialInvestment = '0'
  enteredExpectedReturn = '5'
}
