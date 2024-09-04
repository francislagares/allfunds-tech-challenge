import { ProductRepository } from '@/domain/repositories/product.repository';

export const addToCart = async (
  productRepository: ProductRepository,
  productId: string,
  quantity: number,
) => {
  return await productRepository.updateStock(productId, quantity);
};
