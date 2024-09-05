import { Product } from '@/domain/entities/product';
import { ProductRepository } from '@/domain/repositories/product.repository';

import {
  getFavoriteProducts,
  getProductsFromAPI,
  updateFavoriteStatus,
  updateProductStock,
} from './product.api';

export class ProductService implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    return await getProductsFromAPI();
  }

  async getFavorites(): Promise<Product[]> {
    return await getFavoriteProducts();
  }

  async updateFavorites(productId: string, favorite: boolean): Promise<void> {
    await updateFavoriteStatus(productId, favorite);
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    await updateProductStock(productId, quantity);
  }
}
