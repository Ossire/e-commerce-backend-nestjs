import { Module } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { UsersModule } from '../users/users.module';
import { AuthenController } from './authen.cotroller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [AuthenService],
  controllers: [AuthenController],
  exports: [JwtModule],
})
export class AuthenModule {}
