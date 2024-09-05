import { Product } from '@/domain/entities/product';
import { axiosInstance } from '@/infrastucture/axios/axiosInstance';

export const getProductsFromAPI = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>('/grocery');

  return response.data;
};

export const updateProductStock = async (
  productId: string,
  quantity: number,
) => {
  await axiosInstance.patch(`/grocery/${productId}`, { quantity });
};
