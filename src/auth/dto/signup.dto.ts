/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long ' })
  password: string;
}
