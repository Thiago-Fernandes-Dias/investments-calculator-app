import { Injectable } from '@angular/core';

export interface InvestmentResults {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

export interface InvestmentResultsParams {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number
}

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  annualData: InvestmentResults[] = [];
  calculateInvestmentResults(params: InvestmentResultsParams): void {
    const annualData = [];
    const {
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment: annualInvestment,
    } = params;
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.annualData = annualData;
  }
}
