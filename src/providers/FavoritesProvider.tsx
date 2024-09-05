import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Product } from '@/domain/entities/product';
import { ProductService } from '@/infrastucture/product/product.service.';

type FavoritesContextType = {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const productService = new ProductService();

  useEffect(() => {
    (async () => {
      const initialFavorites = await productService.getFavorites();

      setFavorites(initialFavorites);
    })();
  }, []);

  const addFavorite = async (product: Product) => {
    await productService.updateFavorites(product.id, true);

    setFavorites(prev => [...prev, product]);
  };

  const removeFavorite = async (id: string) => {
    await productService.updateFavorites(id, false);

    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const isFavorite = useCallback(
    (id: string) => favorites.some(fav => fav.id === id),
    [favorites],
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider',
    );
  }
  return context;
};
