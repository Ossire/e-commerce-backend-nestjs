import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AuthenModule } from 'src/authen/authe.module';
import { CategoriesModule } from 'src/categories/categories.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    AuthenModule,
    CategoriesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
