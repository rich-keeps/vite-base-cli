import axios from "axios";

const ajax = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8;",
  },
});

const showLoading = () => {};

const hideLoading = () => {};

ajax.interceptors.request.use(
  (config) => {
    config.loading && showLoading();

    const token = localStorage.getItem("token");

    token && (config.headers.Authorization = token);

    return config;
  },
  (error) => Promise.reject(error)
);

ajax.interceptors.response.use(
  (response) => {
    hideLoading();
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status) {
      const { status } = error.response;

      let message;

      switch (status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "请求错误";
          break;
        case 404:
          message = "请求地址出错";
          break;
        case 408:
          message = "请求超时";
          break;
        case 500:
          message = "服务器内部错误!";
          break;
        case 501:
          message = "服务未实现!";
          break;
        case 502:
          message = "网关错误!";
          break;
        case 503:
          message = "服务不可用!";
          break;
        case 504:
          message = "网关超时!";
          break;
        case 505:
          message = "HTTP版本不受支持";
          break;
        default:
          message = "请求失败";
      }

      console.log(message);

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default ajax;
