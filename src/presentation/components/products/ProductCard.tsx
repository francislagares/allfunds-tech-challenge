import { Product } from '@/domain/entities/product';

import {
  AddToCartButton,
  CardContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  StockAndButtonContainer,
  StockInfo,
} from './ProductList.styles';

interface CardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<CardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <CardContainer>
      <ProductImage src={product.image_url} alt={product.productName} />
      <ProductInfo>
        <ProductTitle>{product.productName}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductInfo>
      <StockAndButtonContainer>
        <StockInfo stock={product.stock}>
          {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
        </StockInfo>
        <AddToCartButton
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          Add to Cart
        </AddToCartButton>
      </StockAndButtonContainer>
    </CardContainer>
  );
};

export default ProductCard;
