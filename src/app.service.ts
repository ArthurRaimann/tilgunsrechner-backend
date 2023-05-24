import { Injectable } from '@nestjs/common';
import { CreatePaymentPlanDto } from './dto';
import calculateMonthlyRate from './strategy/calculate-monthly-rate.strategy';
import { PaymentPlan } from './types';
import calculatePaymentPlan from './strategy/calculate-payment-plan.strategy';

@Injectable()
export class AppService {
  getServiceHealth(): string {
    return 'Service alive!';
  }

  createPaymentPlan(body: CreatePaymentPlanDto): PaymentPlan {
    const { loanAmount, interestRate, initialRepayment, fixedInterestPeriod } =
      body;

    // initialize payment plan
    let paymentPlan: PaymentPlan = {
      monthlyPaymentAmount: null,
      restTotalAmount: null,
      yearlyPaymentPlans: [],
    };

    // calculate monthly payment rate
    const monthlyRate = calculateMonthlyRate(
      interestRate,
      initialRepayment,
      loanAmount,
    );

    paymentPlan.monthlyPaymentAmount = Number(
      monthlyRate.toFixed(2),
    ).toLocaleString();

    // function to calculate the payment plan
    paymentPlan = calculatePaymentPlan(
      paymentPlan,
      loanAmount,
      interestRate,
      fixedInterestPeriod,
      monthlyRate,
    );

    return paymentPlan;
  }
}
