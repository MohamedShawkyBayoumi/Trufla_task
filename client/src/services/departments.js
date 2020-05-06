import request from './API_CENTRAL';

export function fetch_departments() {
  
  return request({
    url: `/departments`,
    method: 'GET',
  });
}

export function fetch_single_department_products(department_id) {
  
  return request({
    url: `/products?department_id=${department_id}`,
    method: 'GET',
  });
}
