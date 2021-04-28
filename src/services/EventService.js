import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/PThibodeau/BattleWagon',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTrucks() {
    return apiClient.get('/trucks')
  },
  getEvent(id) {
    return apiClient.get('/trucks/' + id)
  }
}
