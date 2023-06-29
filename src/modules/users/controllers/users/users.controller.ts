import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('')
  getUsers(): { name: string }[] {
    return this.usersService.getUsers();
  }
  @Post()
  addUser(@Body('name') name: string): number {
    return this.usersService.addUsers(name);
  }
}
