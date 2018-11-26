import axios from 'axios'
import router from '../router'                       // 路由配置文件

const ENV = process.env.NODE_ENV

const service = axios.create({
  // baseURL:"http://novel.juhe.im/",代理服务器请求接口地址
  timeout: 5000,
  method: 'get'
})

service.interceptors.response.use(
  response => {
    if (response) {
      switch (response.status) {
        case 200: break;
        default:
          Message.error(response.data.data.msg ? response.data.data.msg : '返回状态非200')
      }
      return response
    } else {
      Message.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    Message.error(ENV === 'development' ? error.message : '请求错误！')
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })

export default service
