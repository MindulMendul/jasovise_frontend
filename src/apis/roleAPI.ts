"use server";

import { getAPI, postAPI } from "@/apis/API";

export const getAnalyedRole = async (params = {}) => getAPI("role", params);
export const postRole = async (role: POSTRoleAPI) => postAPI("role", role);
