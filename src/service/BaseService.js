import api from './BaseApi';
import queryString from 'query-string';

class BaseService {
  api = api

  get(endpoint, params) {
    const query = queryString.stringify(params);
    endpoint = `${endpoint}?${query}`

    return api.get(endpoint);
  }
}

export default BaseService;
