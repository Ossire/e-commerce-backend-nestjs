import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService implements OnModuleInit {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async onModuleInit() {
    const count = await this.categoryRepository.count();
    if (count === 0) {
      const defaults = [
        { name: 'Electronics', description: 'Gadgets and devices' },
        { name: 'Clothing', description: 'Apparel and accessories' },
        { name: 'Home & Kitchen', description: 'Furniture and appliances' },
      ];
      await this.categoryRepository.save(defaults);
      console.log('Seeded default categories');
    }
  }

  async findAll() {
    return await this.categoryRepository.find();
  }
}
