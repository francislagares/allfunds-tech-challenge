import { Product } from '@/domain/entities/product';

export interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  updateStock(productId: string, stock: number): Promise<void>;
  getFavorites(): Promise<Product[]>;
}
