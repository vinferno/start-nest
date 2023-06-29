import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: { name: string }[] = [{ name: 'Larry' }];
  getUsers(): { name: string }[] {
    return this.users;
  }
  addUsers(name: string): number {
    const id = this.users.length;
    this.users.push({ name });
    return id;
  }
}
