import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Product } from './product';
import { ProductsProvider } from './products.provider';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsProvider: ProductsProvider) {}

  @Get()
  getProducts(): Product[] {
    return this.productsProvider.fetchProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Product {
    const product = this.productsProvider.fetchProduct(id);
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): { id: number } {
    const id = this.productsProvider.insertProduct(title, description, price);
    return { id };
  }
}
