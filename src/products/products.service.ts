import { Injectable, NotFoundException } from '@nestjs/common';
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  createdAt?: Date;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 25,
      description: 'Ergonomic optical mouse',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: 85,
      description: 'Clicky mechanical switches',
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: 40,
      description: '7-in-1 multi-port adapter',
    },
    {
      id: 4,
      name: 'Monitor Stand',
      price: 30,
      description: 'Adjustable aluminum stand',
    },
  ];

  private idCounter = 5;

  create(productData: { name: string; price: number; description?: string }) {
    const newProduct: Product = {
      id: this.idCounter++,
      createdAt: new Date(),
      ...productData,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found `);
    }
    return product;
  }

  update(
    id: number,
    updateData: { name?: string; price?: number; description?: string },
  ) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with id ${id} not found `);
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateData,
    };
    return this.products[productIndex];
  }

  remove(id: number) {
    const productIndex = this.products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Product with id ${id} not found `);
    }

    this.products.splice(productIndex, 1);

    return { message: `Product ${id} succesfully deleted` };
  }
}
