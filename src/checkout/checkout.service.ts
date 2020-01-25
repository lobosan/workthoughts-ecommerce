import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/product.model';
import { products } from '../products/products';
import { Checkout } from './checkout.model';

@Injectable()
export class CheckoutService {
  private products: Product[] = products;

  calculateCheckout(productCodes: string[]): Checkout {
    const items = productCodes.map(productCode =>
      this.products.find(product => product.productCode === productCode),
    );

    return this.shoppingCart(items);
  }

  private shoppingCart(items: Product[]): Checkout {
    let totalPrice = 0;
    let loyaltyPoints = 0;

    items.forEach(({ productCode, price }) => {
      let discount = +productCode.replace(/\D/g, '');
      totalPrice += price - (price * discount) / 100;
      discount = discount === 0 ? 5 : discount;
      loyaltyPoints += price / discount;
    });

    return { totalPrice, loyaltyPoints };
  }
}
