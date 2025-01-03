"use server";

import { publicApi } from "@/configs/axios";

export const getHouses = async (params: any) => {
  let [data, error] = [undefined, undefined] as any;

  try {
    const result = await publicApi.get(`/house/find-my-house`, {
      params: params,
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};
