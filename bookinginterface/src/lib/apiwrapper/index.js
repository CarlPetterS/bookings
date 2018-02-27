
module.exports = (fetch, baseUrl) => {
  const get  = (path) => fetch(baseUrl+(path || '/'))
    .then(response => response.json());

  const post = (path, data) => fetch(
    baseUrl+(path || '/'), 
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => response.json());

  return {
    getRoot:             ()             => get(),
    getApi:              ()             => get('/api'),
    getEmployees:        ()             => get('/api/employees'),
    getBusinessPartners: ()             => get('/api/businesspartners'),
    getTeams:            ()             => get('/api/teams'),
    getRooms:            ()             => get('/api/rooms'),
    getPeople:           ()             => get('/api/people'),
    getCostLogs:         ()             => get('/api/costlogs'),
    createCostLog:       (teamId, data) => post(`/api/teams/${teamId}/costlogs`, data),
    createBooking:       (data)         => post('/api/bookings', data)
  }
}
