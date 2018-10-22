import axios from 'axios'

const SERVER_API_ENDPOINT = process.env.VUE_APP_SERVER_API_ENDPOINT
const REQUEST_TIMEOUT = process.env.VUE_APP_REQUEST_TIMEOUT

export function getServerInstance() {
  return axios.create({
    baseURL: SERVER_API_ENDPOINT,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
