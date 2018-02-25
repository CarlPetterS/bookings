
module.exports = (fetch) => ({
  get: (url) => fetch(url).then(response => response.json())
})
