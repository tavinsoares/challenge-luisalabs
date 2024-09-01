import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

import { productsMock } from 'src/mock';

@Injectable()
export class ProductsService {
  async getProducts(): Promise<ProductDTO[]> {
    const { products } = productsMock[0];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          products.map((product) => {
            const oldPrice = Number(product.priceInCents) / 100;
            const price = Number(product.salePriceInCents) / 100;
            return new ProductDTO(
              product.code,
              product.image,
              oldPrice,
              price,
              product.rating,
              product.name,
            );
          }),
        );
      }, 2000);
    });
  }
}
