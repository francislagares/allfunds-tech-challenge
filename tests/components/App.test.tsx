import { describe, expect, test } from 'vitest';

import App from '@/App';
import { ProductList } from '@/presentation/components/products/ProductList';
import { render } from 'tests/utils/custom-render';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders products list', async () => {
    render(<ProductList />);

    const response = await fetch('/grocery');
    const data = await response.json();

    expect(data).toHaveLength(3);
  });
});
