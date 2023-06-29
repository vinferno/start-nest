import { Module } from '@nestjs/common';
import { ProductsModule } from '../products/products.module';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ProductsModule],
})
export class UsersModule {}
