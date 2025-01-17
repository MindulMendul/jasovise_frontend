"use server";

import { publicApi } from "@/configs/axios";

export const getAnalyedRole = async (params: any) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.get(`/role`, {
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

export const postRole = async (role: POSTRoleAPI) => {
  let [data, error] = [undefined, undefined] as [any, any];

  try {
    const result = await publicApi.post(`/role`, role, {
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