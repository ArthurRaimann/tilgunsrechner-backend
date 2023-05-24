import { PaymentPlan } from 'src/types';

const calculatePaymentPlan = (
  paymentPlan: PaymentPlan,
  loanAmount: number,
  interestRate: number,
  fixedInterestPeriod: number,
  monthlyRate: number,
): PaymentPlan => {
  const monthts = 12 * fixedInterestPeriod;
  let remainder = loanAmount;

  for (let i = 1; i <= monthts; i++) {
    // calculate interest portion of monthly rate --> Zinsanteil
    const interestComponent = Number(
      ((remainder * interestRate) / 100 / 12).toFixed(2),
    );

    // calculate repayment portion of monthly rate --> Tilgungsanteil
    const repaymentComponent = Number(
      (monthlyRate - interestComponent).toFixed(2),
    );

    // residual debt --> Restschuld
    remainder = Number((remainder - repaymentComponent).toFixed(2));

    // create monthly entry for payment plan
    paymentPlan.monthlyPaymentPlans.push({
      month: i,
      monthlyRate,
      interestPortion: interestComponent,
      repaymentPortion: repaymentComponent,
      remainingDebt: remainder,
    });

    // set rest total amount
    if (i === monthts) {
      paymentPlan.restTotalAmount = remainder;
    }
  }

  return paymentPlan;
};

export default calculatePaymentPlan;
