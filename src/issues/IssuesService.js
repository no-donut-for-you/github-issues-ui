import BaseService from '../service/BaseService';

class IssuesService extends BaseService {
  async listIssues(username, repository, filters) {
    const endpoint = `api/v1/issues/${username}/${repository}`;
    const response = await this.get(endpoint, filters);

    return response.data;
  }
}

export default new IssuesService();
