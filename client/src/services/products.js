import request from './API_CENTRAL';

export function fetch_all_products() {
  
  return request({
    url: `/products`,
    method: 'GET',
  });
}