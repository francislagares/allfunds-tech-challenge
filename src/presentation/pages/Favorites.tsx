import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { ProductService } from '@/infrastucture/product/product.service.';
import ProductCard from '@/presentation/components/products/ProductCard';
import { ProductsGrid } from '@/presentation/components/products/ProductList.styles';

const productService = new ProductService();

const FavoritesPage: React.FC = () => {
  const {
    data: favoriteProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => productService.getFavorites(),
  });

  if (isLoading) return <div>Loading favorites...</div>;
  if (error) return <div>Error fetching favorites: {error.message}</div>;

  if (!favoriteProducts || favoriteProducts.length === 0) {
    return <p>No favorite products.</p>;
  }

  return (
    <ProductsGrid>
      {favoriteProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => {}}
        />
      ))}
    </ProductsGrid>
  );
};

export default FavoritesPage;
