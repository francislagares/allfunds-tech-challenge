import { describe, test } from 'vitest';

import { render } from 'tests/utils/custom-render';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });
});
