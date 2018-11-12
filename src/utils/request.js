const Fly = require('flyio/dist/npm/wx')
const service = new Fly()

service.config.timeout = 60000
service.config.baseURL = 'http://rap2api.taobao.org/app/mock/117113/'

service.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'xxx'
    console.log(config)
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export function getRequest (url, param) {
  return service.get(url, param || {})
}

export default service
