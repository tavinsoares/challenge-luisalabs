import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from 'src/dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  @Get()
  getHello(): Promise<ProductDTO[]> {
    return this.appService.getProducts();
  }
}
