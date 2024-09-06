export interface ProductDto {
  id: string;
  image_url: string;
  productName: string;
  productDescription: string;
  price: number;
  stock: number;
  isFavorite: boolean;
}
