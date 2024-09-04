import { Product } from '@/domain/entities/product';
import { ProductRepository } from '@/domain/repositories/product.repository';

export const getFavorites = async (
  productRepository: ProductRepository,
): Promise<Product[]> => {
  return await productRepository.getFavorites();
};
