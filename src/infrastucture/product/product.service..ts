import { Product } from '@/domain/entities/product';
import { ProductRepository } from '@/domain/repositories/product.repository';

import { getProductsFromAPI, updateProductStock } from './product.api';

export class ProductService implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    return await getProductsFromAPI();
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    await updateProductStock(productId, quantity);
  }

  async getFavorites(): Promise<Product[]> {
    return (await this.getAllProducts()).filter(product => product.isFavorite);
  }
}
