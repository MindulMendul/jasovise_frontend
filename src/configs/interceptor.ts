import { privateApi } from "@/configs/axios";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
//public client 함수

export const onPublicRequest = async (request: any) => {
  return request;
};

export const onRequestError = (error: AxiosError) => {
  Promise.reject(error);
};

export const onResponse = async (response: any) => {
  return response;
};

export const onPublicResponseError = async (error: any) => {
  return Promise.reject(error);
};

//private client 함수

export const onPrivateRequest = async (request: any) => {
  const cookieStorage = await cookies();
  const accessToken = cookieStorage.get("accessToken")?.value;
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return request;
};

export const onPrivateResponseError = async (error: any) => {
  //error 타입이 AxiosError 인데, 타입 지정 다시 해줘야할 듯
  const status = error.response.data.status;
  const errorConfig = error.response.config;

  try {
    if (status == 401) {
      console.log("access token이 유효하지 않습니다");
    }

    // Access Token 재발급해서 다시 신호 보내주는 작업
    if (status == 402) {
      const prevRequest = errorConfig;
      const cookieStorage = await cookies();
      cookieStorage.set("accessToken", error.response.data.data[0].access_token);
      prevRequest.headers["Authorization"] = `Bearer ${error.response.data.data[0].access_token}`;
      return privateApi(errorConfig);
    }

    if (status == 500) {
      console.log("internal error");
    }
  } catch (referenceError) {
    console.log(referenceError);
    return Promise.reject(referenceError);
  }
  return Promise.reject(error);
};
