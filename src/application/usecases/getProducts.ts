import { Product } from '@/domain/entities/product';
import { ProductRepository } from '@/domain/repositories/product.repository';

export const getProducts = async (
  productRepository: ProductRepository,
): Promise<Product[]> => {
  return await productRepository.getAllProducts();
};
