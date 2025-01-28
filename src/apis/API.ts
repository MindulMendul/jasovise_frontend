"use server";

import { publicApi } from "@/configs/axios";

export const getAPI = async (url: string, params: object) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.get(url, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err: any) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};

export const postAPI = async (url: string, body: any) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.post(url, body, {
      params: {},
      headers: {},
    });
    data = result?.data;
  } catch (err: any) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};
