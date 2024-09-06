import { Product } from '@/domain/entities/product';

import { ProductDto } from './dto';

export function dtoToProduct(dto: ProductDto): Product {
  return {
    id: dto.id,
    imageUrl: dto.image_url,
    productName: dto.productName,
    productDescription: dto.productDescription,
    price: dto.price,
    stock: dto.stock,
    isFavorite: dto.isFavorite,
  };
}
