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
  await axiosInstance.patch(`/grocery/${productId}`, { stock: quantity });
};

export const updateFavoriteStatus = async (
  productId: string,
  favorite: boolean,
) => {
  await axiosInstance.patch(`/grocery/${productId}`, {
    favorite: favorite ? 1 : 0,
  });
};

export const getFavoriteProducts = async () => {
  const response = await axiosInstance.get<Product[]>('/grocery?favorite=1');

  return response.data;
};
