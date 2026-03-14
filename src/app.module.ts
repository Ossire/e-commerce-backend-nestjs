import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

import { ProductsModule } from './products/products.module';

import { UsersModule } from './users/users.module';
import { AuthenModule } from './authen/authe.module';
import { Product } from './products/entities/product.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Product],
        synchronize: true,
      }),
    }),
    UsersModule,
    AuthenModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
