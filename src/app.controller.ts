import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return {
      status: 'success',
      message: 'E-Commerce Backend API is running perfectly!',
      version: '1.0.0',
      endpoints: 'Please append /api/v1 to the URL to access the data.',
    };
  }
}
