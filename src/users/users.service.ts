import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(signupDto: SignupDto): Promise<User> {
    const existingUser = await this.userRepo.findOne({
      where: { email: signupDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const newUser = this.userRepo.create(signupDto);

    return await this.userRepo.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepo.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userRepo.findOne({ where: { id } });
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.userRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with ${id} not found `);
    }

    return { message: `user ${id} succesfully removed` };
  }
}
