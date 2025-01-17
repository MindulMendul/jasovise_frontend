"use server";

import { publicApi } from "@/configs/axios";

export const getAnalyedEssay = async (params: object) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.get(`/essay`, {
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

export const postEssay = async (essay: PostEssayAPI) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.post(`/essay`, essay, {
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
