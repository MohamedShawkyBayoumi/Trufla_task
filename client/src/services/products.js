import request from './API_CENTRAL';

export function fetch_all_products(page, perPage) {
  return request({
    url: `/products?page=${page}&perPage=${perPage}`,
    method: 'GET',
  });
}