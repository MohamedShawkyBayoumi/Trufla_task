import request from './API_CENTRAL';

export function fetch_departments() {
  
  return request({
    url: `/departments`,
    method: 'GET',
  });
}

export function fetch_single_department(department_id) {
  
  return request({
    url: `/department/${department_id}`,
    method: 'GET',
  });
}
