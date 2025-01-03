import {
  onPrivateRequest,
  onPrivateResponseError,
  onPublicRequest,
  onPublicResponseError,
  onRequestError,
  onResponse,
} from "@/configs/interceptor";
import axios from "axios";

// 인증이 필요없는 인스턴스
export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 10000,
});
publicApi.interceptors.request.use(onPublicRequest, onRequestError);
publicApi.interceptors.response.use(onResponse, onPublicResponseError);

// 서버 사이드에서 사용할 인스턴스
export const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 10000,
});
privateApi.interceptors.request.use(onPrivateRequest, onRequestError);
privateApi.interceptors.response.use(onResponse, onPrivateResponseError);
