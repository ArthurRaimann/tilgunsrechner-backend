import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePaymentPlanDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getServiceHealth(): string {
    return this.appService.getServiceHealth();
  }

  /**
   *
   * @param body
   * @returns PaymentPlan
   * @description This endpoint is used to calculate the payment plan for a loan.
   * The request body will be validated by the validation pipe against the CreatePaymentPlanDto.
   */
  @Get('/payment-plan')
  createPaymentPlan(@Body() body: CreatePaymentPlanDto) {
    return this.appService.createPaymentPlan(body);
  }
}
