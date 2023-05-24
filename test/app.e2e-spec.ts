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
      loanAmount: 1000,
      interestRate: 1,
      initialRepayment: 1,
      fixedInterestPeriod: 1,
    };

    const expectedResponseBody = {
      monthlyPaymentAmount: '1,67',
      restTotalAmount: '989,95',
      yearlyPaymentPlans: [
        {
          year: 1,
          interestPortion: '9,95',
          repaymentPortion: '10,05',
          remainingDebt: '989,95',
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
