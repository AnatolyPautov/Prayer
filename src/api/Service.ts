import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
const baseUrl = 'https://prayer.herokuapp.com/';
const token =
  '473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8';

class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    /*  this.api.interceptors.request.use(config => {
      const token = user.user.token;
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }); */
  }

  async post(url: string, data?: any) {
    return this.api.post(url, data);
  }

  async get(url: string) {
    return this.api.get(url);
  }

  async put(url: string, data?: any) {
    return this.api.put(url, data);
  }

  async delete(url: string, data?: any) {
    return this.api.delete(url, data);
  }
}

export default new Api();
