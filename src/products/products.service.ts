import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    userId: string,
  ): Promise<Product> {
    const newProduct = this.productRepo.create({
      ...createProductDto,
      owner: { id: userId },
    });

    return await this.productRepo.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepo.find({ relations: ['owner'] });
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['owner'],
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.findOne(id);

    const updatedProduct = this.productRepo.merge(product, updateProductDto);

    return await this.productRepo.save(updatedProduct);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.productRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`product with id${id} doesnt exist`);
    }

    return { message: `Product ${id} succesfully deleted` };
  }
}
