import { IsNumber, Max, Min } from 'class-validator';

export class CreatePaymentPlanDto {
  @IsNumber()
  @Min(0)
  loanAmount: number; // amount of the requested loan --> Darlehensbetrag
  @IsNumber()
  @Min(0)
  interestRate: number; // interest rate --> Sollzinssatz
  @IsNumber()
  @Min(0)
  initialRepayment: number; // initial repayment --> Tilgungssatz
  @IsNumber()
  @Min(1)
  @Max(30)
  fixedInterestPeriod: number; // fixed interest period --> Zinsbindungsdauer
}
