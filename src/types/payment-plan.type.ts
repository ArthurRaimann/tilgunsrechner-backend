export interface PaymentPlan {
  monthlyPaymentAmount: number;
  restTotalAmount: number;
  monthlyPaymentPlans: {
    month: number;
    monthlyRate: number;
    interestPortion: number;
    repaymentPortion: number;
    remainingDebt: number;
  }[];
}
