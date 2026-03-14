import { Controller, Post, Body } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { LoginDto } from 'src/auth/dto/login.dto';
@Controller('auth')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) {}

  @Post('signup')
  async signUp(@Body() signupDto: SignupDto) {
    return this.authenService.signUp(signupDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authenService.login(loginDto);
  }
}
