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

    items.forEach(item => {
      let discount = 0;

      if (item.productCode.startsWith('DIS_10')) {
        discount = item.price * 0.1;
        loyaltyPoints += item.price / 10;
      } else if (item.productCode.startsWith('DIS_15')) {
        discount = item.price * 0.15;
        loyaltyPoints += item.price / 15;
      } else {
        loyaltyPoints += item.price / 5;
      }

      totalPrice += item.price - discount;
    });

    return { totalPrice, loyaltyPoints };
  }
}
