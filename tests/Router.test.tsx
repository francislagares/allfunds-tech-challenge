import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { navigateTo } from './utils/router-navigation';

describe('Router Provider', () => {
  it('should render home page for /', async () => {
    navigateTo('/');

    expect(location.pathname).toBe('/');
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /products/i }),
      ).toBeInTheDocument();
    });
  });

  it('should render favorite products page for /favorites', async () => {
    navigateTo('/favorites');

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /favorite/i }),
      ).toBeInTheDocument();
    });
  });
});
