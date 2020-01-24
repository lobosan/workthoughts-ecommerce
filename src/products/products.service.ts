import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { products } from './products';

@Injectable()
export class ProductsService {
  private products: Product[] = products;

  getAllProducts(): Product[] {
    return this.products;
  }
}
