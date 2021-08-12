import axios from 'axios';

export function requestGetBoards() {
  return axios.request({
    method: 'get',
    url: 'https://prayer.herokuapp.com/columns',
    headers: {
      Authorization:
        'Bearer 473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8',
    },
  });
}
