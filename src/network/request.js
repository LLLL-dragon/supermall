import axios from 'axios'

export function request(config){

    // 1. 创建 axios 的实例
    const instance = axios.create({
      baseURL: 'http://106.54.54.237:8000/api/wh',
      timeout:5000

    })
    // 2. axios 的拦截器
    // 2.1 请求拦截的作用
    instance.interceptors.request.use( config => {
      // console.log(config)
      // 拦截之后一定要再返回
      // 那为什么还要拦截呢
      // 1. 比如一些数据不符合浏览器的要求
      // 2. 比如每次发送网络请求时，都希望页面上显示一个请求的图标
      // 3. 某些网络请求必须携带一些特殊的信息（比如说：登录 token）
      return config
    },err => {
      // console.log(err)
    });
    // 2.2 响应拦截

    instance.interceptors.response.use(resolve => {
      return resolve.data
      // console.log(resolve)
    },err => {
      // console.log(err)
    })

    // 3. 发送真正的网络请求
    return instance(config)

}
