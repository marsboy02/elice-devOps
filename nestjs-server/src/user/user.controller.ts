import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // POST /users
  @Post()
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.create(userData);
  }

  // GET /users
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
