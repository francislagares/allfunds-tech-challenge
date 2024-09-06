import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { navigateTo } from './utils/router-navigation';

describe('Router Provider', () => {
  it('should render home page for /', async () => {
    navigateTo('/');

    const link = screen.getByRole('link', { name: /home/i });
    const heading = await screen.findByRole('heading', { name: /products/i });

    expect(link).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it('should render favorite products page for /favorites', async () => {
    navigateTo('/favorites');

    const link = screen.getByRole('link', { name: /home/i });
    const heading = await screen.findByRole('heading', { name: /favorite/i });

    expect(link).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
