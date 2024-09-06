import { Product } from '@/domain/entities/product';
import { ProductRepository } from '@/domain/repositories/product.repository';

import { dtoToProduct } from './mapperDto';
import {
  getFavoriteProducts,
  getProductsFromAPI,
  updateFavoriteStatus,
  updateProductStock,
} from './product.api';

export class ProductService implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    const productDtos = await getProductsFromAPI();

    return productDtos.map(dtoToProduct);
  }

  async getFavorites(): Promise<Product[]> {
    const productDtos = await getFavoriteProducts();

    return productDtos.map(dtoToProduct);
  }

  async updateFavorites(productId: string, favorite: boolean): Promise<void> {
    await updateFavoriteStatus(productId, favorite);
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    await updateProductStock(productId, quantity);
  }
}
