import { describe, expect, test } from 'vitest';

import App from '@/App';
import { render } from 'tests/utils/custom-render';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders products list', async () => {
    const response = await fetch('/grocery');
    const data = await response.json();

    expect(data).toHaveLength(3);
  });
});
