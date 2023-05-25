export interface PaymentPlan {
  monthlyPaymentAmount: string;
  restTotalAmount: string;
  yearlyPaymentPlans: {
    year: number;
    yearlyRate: string;
    interestPortion: string;
    repaymentPortion: string;
    remainingDebt: string;
  }[];
}
