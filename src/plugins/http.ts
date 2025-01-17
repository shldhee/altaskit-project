import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  baseURL: "https://apps-test.osci.kr/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const request = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.get<T>(url, config);
    return response;
  },
  post: async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response;
  },
  put: async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.put<T>(url, data, config);
    return response;
  },
  patch: async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.patch<T>(url, data, config);
    return response;
  },
  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axiosInstance.delete<T>(url, config);
    return response;
  },
};

export default request;
