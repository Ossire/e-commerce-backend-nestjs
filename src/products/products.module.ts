import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AuthenModule } from 'src/authen/authe.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), AuthenModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
