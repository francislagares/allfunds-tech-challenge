import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import delay from 'delay';
import { http, HttpResponse } from 'msw';
import { describe, expect, test } from 'vitest';

import { ProductList } from '@/presentation/components/products/ProductList';
import { mswServer } from 'tests/mocks/server';
import { render } from 'tests/utils/custom-render';

describe('Products Component', () => {
  test('renders products list', async () => {
    render(<ProductList />);

    const productItems = await screen.findAllByRole('img');

    expect(productItems.length).toBeGreaterThan(0);
  });

  test('should render no products available if no product is found', async () => {
    mswServer.use(http.get('/grocery', () => HttpResponse.json([])));

    render(<ProductList />);

    const message = await screen.findByText(/no products available/i);

    expect(message).toBeInTheDocument();
  });

  test('should render error message when there is an error', async () => {
    mswServer.use(http.get('/grocery', () => HttpResponse.error()));

    render(<ProductList />);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  test('should render a loading indicator when fetching data', async () => {
    mswServer.use(
      http.get('/grocery', async () => {
        await delay(4000);

        return HttpResponse.json([]);
      }),
    );

    render(<ProductList />);

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  test('should remove loading indicator after data is fetched', async () => {
    render(<ProductList />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  });

  test('should remove loading indicator if data fetching fails', async () => {
    mswServer.use(http.get('/grocery', () => HttpResponse.error()));

    render(<ProductList />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  });
});
