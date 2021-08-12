import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://prayer.herokuapp.com',
  withCredentials: true,
  headers: {
    Authorization:
      'Bearer 473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8',
  },
});

export const userAPI = {
  getBoards: () => {
    return instanse.get(`/columns`).then(response => {
      return response.data;
    });
  },
};
