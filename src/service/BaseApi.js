import axios from 'axios';

class BaseApi {
  async request(options) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const client = axios.create({
      headers,
      baseURL: process.env.REACT_APP_GITHUB_ISSUES_API_URL,
    });

    return await client.request(options);
  }

  get(url) {
    return this.request(url);
  }
}

export default new BaseApi();
