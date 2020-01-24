import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [ProductsModule, CheckoutModule],
})
export class AppModule {}
