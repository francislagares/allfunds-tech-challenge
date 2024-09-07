import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import CartItem from '@/presentation/components/cart/CartItem';
import { render } from 'tests/utils/custom-render';

describe('CartItem Component', () => {
  const renderComponent = (quantity: number) => {
    const mockProps = {
      imageUrl: 'image.jpg',
      productName: 'Test Product',
      productPrice: 10,
      quantity,
      onIncrease: vi.fn(),
      onDecrease: vi.fn(),
    };

    render(<CartItem {...mockProps} />);

    const user = userEvent.setup();

    const increaseQuantity = async () => {
      const incrementButton = screen.getByText('+');
      await user.click(incrementButton);
    };

    const decreaseQuantity = async () => {
      const decrementButton = screen.getByText('-');
      await user.click(decrementButton);
    };

    return {
      increaseQuantity,
      decreaseQuantity,
      mockProps,
    };
  };

  it('should display product details', () => {
    renderComponent(2);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should call onIncrease when the increment button is clicked', async () => {
    const { increaseQuantity, mockProps } = renderComponent(1);

    await increaseQuantity();

    expect(mockProps.onIncrease).toHaveBeenCalled();
  });

  it('should call onDecrease when the decrement button is clicked', async () => {
    const { decreaseQuantity, mockProps } = renderComponent(1);

    await decreaseQuantity();

    expect(mockProps.onDecrease).toHaveBeenCalled();
  });
});
