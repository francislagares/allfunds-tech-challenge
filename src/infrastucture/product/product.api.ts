import { axiosInstance } from '@/infrastucture/axios/axiosInstance';

import { ProductDto } from './dto';

export const getProductsFromAPI = async (): Promise<ProductDto[]> => {
  const response = await axiosInstance.get<ProductDto[]>('/grocery');

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
  const response = await axiosInstance.get<ProductDto[]>('/grocery?favorite=1');

  return response.data;
};
