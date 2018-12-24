
import axios from 'axios';
import qs from 'qs';

const Util = {
    imgPath: 'http://127.0.0.1:8011/img/',
    apiPath: 'http://127.0.0.1:8005/api/'
};

// ajax通用配置
Util.ajax = axios.create({
    baseURL: Util.apiPath,
    timeout: 10000,
    transformRequest: data => qs.stringify(data) // 将application/json转换为application/x-www-form-urlencoded
});

// request拦截器
Util.ajax.interceptors.request.use(
  e => {
    e.params = e.params || {}
    e.headers = e.headers || {}
    //set 默认值
    return e
  },
  error => ({ status: 0, msg: error.message })
);

// 添加response相应拦截器
Util.ajax.interceptors.response.use(res => {
    return res.data;
});

export default Util;

