import { Controller, Get } from '@nestjs/common';
import { resolveSoa } from 'dns';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts(): { id: number }[] {
    return this.productsService.getProducts();
  }
}
