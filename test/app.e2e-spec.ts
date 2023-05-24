import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) - server health check', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Service alive!');
  });

  it('/payment-plan (GET) - request payment plan', () => {
    const requestBody = {
      loanAmount: 250000,
      interestRate: 2,
      initialRepayment: 3,
      fixedInterestPeriod: 1,
    };

    const expectedResponseBody = {
      monthlyPaymentAmount: 1041.67,
      restTotalAmount: 242430.83,
      monthlyPaymentPlans: [
        {
          month: 1,
          monthlyRate: 1041.67,
          interestPortion: 416.67,
          repaymentPortion: 625,
          remainingDebt: 249375,
        },
        {
          month: 2,
          monthlyRate: 1041.67,
          interestPortion: 415.63,
          repaymentPortion: 626.04,
          remainingDebt: 248748.96,
        },
        {
          month: 3,
          monthlyRate: 1041.67,
          interestPortion: 414.58,
          repaymentPortion: 627.09,
          remainingDebt: 248121.87,
        },
        {
          month: 4,
          monthlyRate: 1041.67,
          interestPortion: 413.54,
          repaymentPortion: 628.13,
          remainingDebt: 247493.74,
        },
        {
          month: 5,
          monthlyRate: 1041.67,
          interestPortion: 412.49,
          repaymentPortion: 629.18,
          remainingDebt: 246864.56,
        },
        {
          month: 6,
          monthlyRate: 1041.67,
          interestPortion: 411.44,
          repaymentPortion: 630.23,
          remainingDebt: 246234.33,
        },
        {
          month: 7,
          monthlyRate: 1041.67,
          interestPortion: 410.39,
          repaymentPortion: 631.28,
          remainingDebt: 245603.05,
        },
        {
          month: 8,
          monthlyRate: 1041.67,
          interestPortion: 409.34,
          repaymentPortion: 632.33,
          remainingDebt: 244970.72,
        },
        {
          month: 9,
          monthlyRate: 1041.67,
          interestPortion: 408.28,
          repaymentPortion: 633.39,
          remainingDebt: 244337.33,
        },
        {
          month: 10,
          monthlyRate: 1041.67,
          interestPortion: 407.23,
          repaymentPortion: 634.44,
          remainingDebt: 243702.89,
        },
        {
          month: 11,
          monthlyRate: 1041.67,
          interestPortion: 406.17,
          repaymentPortion: 635.5,
          remainingDebt: 243067.39,
        },
        {
          month: 12,
          monthlyRate: 1041.67,
          interestPortion: 405.11,
          repaymentPortion: 636.56,
          remainingDebt: 242430.83,
        },
      ],
    };
    return request(app.getHttpServer())
      .post('/payment-plan')
      .send(requestBody)
      .expect(201)
      .expect(expectedResponseBody);
  });
});
