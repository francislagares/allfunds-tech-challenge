import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { useCartContext } from '@/providers/CartProvider';

import { Product } from '@/domain/entities/product';
import { ProductService } from '@/infrastucture/product/product.service.';

import ProductCard from './ProductCard';
import { ProductsGrid, ProductsHeading } from './ProductList.styles';

const productRepository = new ProductService();

export const ProductList: React.FC = () => {
  const { addToCart } = useCartContext();
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => productRepository.getAllProducts(),
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (products!.length === 0) return <p>No products available.</p>;

  return (
    <>
      <ProductsHeading>Products</ProductsHeading>
      <ProductsGrid>
        {products?.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ProductsGrid>
    </>
  );
};
