import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsProvider } from './products.provider';

@Module({
  controllers: [ProductsController],
  providers: [ProductsProvider],
})
export class ProductsModule {}
