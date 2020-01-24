import { Controller, Post, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { Checkout } from './checkout.model';

@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Post()
  calculateCheckout(@Body() productCodes: string[]): Checkout {
    return this.checkoutService.calculateCheckout(productCodes);
  }
}
