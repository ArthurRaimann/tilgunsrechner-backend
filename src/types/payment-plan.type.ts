export interface PaymentPlan {
  monthlyPaymentAmount: string;
  restTotalAmount: string;
  yearlyPaymentPlans: {
    year: number;
    interestPortion: string;
    repaymentPortion: string;
    remainingDebt: string;
  }[];
}
