import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const localMongoDbURI =
  'mongodb://localhost:27017/nestDatabase?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

@Module({
  imports: [MongooseModule.forRoot(localMongoDbURI), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
