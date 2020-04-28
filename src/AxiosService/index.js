import axios from "axios";

class AxiosService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handlesuccess = (res) => {
    return res;
  };

  handlefail = (error) => {
    return Promise.reject(error);
  };

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
  delete(url) {
    return this.instance.delete(url);
  }
  put(url, body) {
    return this.instance.put(url, body);
  }
}

export default new AxiosService();
