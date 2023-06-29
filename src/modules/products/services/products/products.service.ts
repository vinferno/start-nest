import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts(): { id: number }[] {
    return [{ id: 2 }];
  }
}
