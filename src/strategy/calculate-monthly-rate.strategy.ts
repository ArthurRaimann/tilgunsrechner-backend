const calculateMonthlyRate = (
  interestRate: number,
  initialRepayment: number,
  loanAmount: number,
): number => {
  // calculate monthly interest rate --> Monatlicher Zinssatz
  const monthlyInterestRate = Number((interestRate / 100 / 12).toFixed(7));

  // calculate monthly initial repayment rate --> Monatlicher Tilgungssatz
  const initialRepaymentRate = Number((initialRepayment / 100 / 12).toFixed(7));

  // calculate monthly rate --> Monatliche Rate
  const monthlyRate = Number(
    loanAmount * (monthlyInterestRate + initialRepaymentRate),
  );

  return monthlyRate || 0;
};

export default calculateMonthlyRate;
