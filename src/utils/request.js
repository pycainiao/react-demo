import axios from 'axios';
import NProgress from 'nprogress'
/**
 * 说明
 * 成功：返回response.data
 * 错误: Promise.reject
 */
/**
 * @Description: 一些基本的axios封装
 * @author
 * @date 2019/11/25
*/

const service = axios.create({
    baseURL: '/api/v1', // 统一的请求前缀
    withCredentials: true
});

service.interceptors.request.use(config => {
    NProgress.start();
    let token = window.sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer '+token;
    }
    return config;
}, error => {
    NProgress.done();
    return Promise.resolve(error);
});

service.interceptors.response.use(res => {
    NProgress.done();

    if (res.status === 200) {
        return res.data;
    } else {
        return Promise.reject(res); // 不是200 统一为报错处理 但是感觉是多余的
    }
}, error => {
    NProgress.done();
    return Promise.reject(error);
});

export default service;
