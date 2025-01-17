"use server";

import { publicApi } from "@/configs/axios";

export const getAnalyedExperience = async (params: any) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.get(`/experience`, {
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

export const postExperience = async (experience: any) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.post(`/experience`, experience, {
      params: {},
      headers: {},
    });
    data = result?.data;
  } catch (err) {
    error = err.response?.data;
    if (!error) error = err;
  }

  return [data, error];
};