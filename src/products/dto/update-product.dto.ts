/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
