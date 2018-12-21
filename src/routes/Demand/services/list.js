import { request } from 'doraemon';

export async function fetch(params) {
  return request('/api/demand/list', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function remove(id) {
  return request(`/api/demand/delete/${id}`);
}
