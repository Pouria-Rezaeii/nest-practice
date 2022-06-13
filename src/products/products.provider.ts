import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductsProvider {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number): number {
    const id = new Date().getTime();
    const product = new Product(id, title, description, price);
    this.products.push(product);
    return id;
  }

  fetchProduct(productId: number): Product {
    const product = this.products.find(({ id }) => id == productId);
    return product;
  }

  fetchProducts(): Product[] {
    return this.products;
  }
}
