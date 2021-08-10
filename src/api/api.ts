import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://prayer.herokuapp.com/api',
  withCredentials: true,
});

export const userAPI = {
  getPayers: () => {
    return instanse.get(`/prayers`).then(response => {
      return response.data;
    });
  },
};
