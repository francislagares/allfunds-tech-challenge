import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { Product } from '@/domain/entities/product';
import { ProductService } from '@/infrastucture/product/product.service.';

import ProductCard from './ProductCard';
import { ProductsGrid } from './ProductList.styles';

const productRepository = new ProductService();

export const ProductList: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => productRepository.getAllProducts(),
  });

  const handleAddToCart = (product: Product) => {
    console.log('Product added to cart:', product);
    // Aquí llamarías a la lógica de añadir al carrito
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <ProductsGrid>
      {products?.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </ProductsGrid>
  );
};
