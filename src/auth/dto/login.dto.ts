/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
