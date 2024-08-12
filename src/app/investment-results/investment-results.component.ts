import { Component, inject } from '@angular/core';
import { InvestmentsResultsService, type InvestmentsResults } from '../investments-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentResultsService: InvestmentsResultsService = inject(InvestmentsResultsService);

  get results(): InvestmentsResults[] {
    return this.investmentResultsService.annualData;
  }
}
