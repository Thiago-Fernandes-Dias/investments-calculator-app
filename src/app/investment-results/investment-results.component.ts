import { Component, inject } from '@angular/core';
import { InvestmentResultsService, InvestmentResults } from '../investments-results.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentResultsService: InvestmentResultsService = inject(InvestmentResultsService);

  get results(): InvestmentResults[] {
    return this.investmentResultsService.annualData;
  }
}
