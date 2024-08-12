import { Injectable } from '@angular/core';

type InvestmentsResults = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

interface InvestmentResultParams {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number
}

@Injectable({ providedIn: 'root' })
export class InvestmentsResultsService {
  annualData: InvestmentsResults[] = [];
  calculateInvestmentResults(params: InvestmentResultParams): void {
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
