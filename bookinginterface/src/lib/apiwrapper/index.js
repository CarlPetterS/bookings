
module.exports = (fetch, baseUrl) => {
  const get = (path) => fetch(baseUrl+(path || '/')).then(response => response.json());

  return {
    getRoot:             () => get(),
    getApi:              () => get('/api'),
    getEmployees:        () => get('/api/employees'),
    getBusinessPartners: () => get('/api/businesspartners'),
    getTeams:            () => get('/api/teams'),
    getPeople:           () => get('/api/people'),
    getCostLogs:         () => get('/api/costlogs'),
  }
}
