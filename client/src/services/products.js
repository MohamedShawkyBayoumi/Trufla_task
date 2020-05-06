import request from './API_CENTRAL';

export function fetch_all_products(page, perPage) {
  console.log('page', page);
  return request({
    url: `/products?page=${page}&perPage=${perPage}`,
    method: 'GET',
  });
}