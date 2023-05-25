import { PaymentPlan } from 'src/types';

const calculatePaymentPlan = (
  paymentPlan: PaymentPlan,
  loanAmount: number,
  interestRate: number,
  fixedInterestPeriod: number,
  monthlyRate: number,
): PaymentPlan => {
  const years = fixedInterestPeriod;
  let remainder = loanAmount;

  for (let i = 1; i <= years; i++) {
    // initialize annual components for payment plan
    let annualInterestComponent = 0;
    let annualRepaymentComponent = 0;

    for (let j = 0; j < 12; j++) {
      let dynamicMonthlyRate = monthlyRate;

      // adjust dynamicMonthlyRate if the remainder is less than monthlyRate
      if (remainder < dynamicMonthlyRate) {
        dynamicMonthlyRate = remainder;
      }

      // calculate interest portion of monthly rate --> Zinsanteil
      const monthlyInterestComponent = Number(
        (remainder * interestRate) / 100 / 12,
      );

      // calculate repayment portion of monthly rate --> Tilgungsanteil
      const monthlyRepaymentComponent = Number(
        dynamicMonthlyRate - monthlyInterestComponent,
      );

      // residual debt --> Restschuld
      remainder = Number(remainder - monthlyRepaymentComponent);

      annualInterestComponent += monthlyInterestComponent;
      annualRepaymentComponent += monthlyRepaymentComponent;
    }

    // create yearly entry for payment plan
    paymentPlan.yearlyPaymentPlans.push({
      year: i,
      yearlyRate: Number(
        (annualInterestComponent + annualRepaymentComponent).toFixed(2) || 0,
      ).toLocaleString(),
      interestPortion: Number(
        annualInterestComponent.toFixed(2) || 0,
      ).toLocaleString(),
      repaymentPortion: Number(
        annualRepaymentComponent.toFixed(2) || 0,
      ).toLocaleString(),
      remainingDebt: Number(remainder.toFixed(2) || 0).toLocaleString(),
    });

    // set rest total amount
    if (i === years) {
      paymentPlan.restTotalAmount = Number(
        remainder.toFixed(2) || 0,
      ).toLocaleString();
    }
  }

  return paymentPlan;
};

export default calculatePaymentPlan;
