import { http, HttpResponse } from 'msw';

import { products } from './db';

export const handlers = [
  http.get('/grocery', () => {
    return HttpResponse.json(products);
  }),
];
