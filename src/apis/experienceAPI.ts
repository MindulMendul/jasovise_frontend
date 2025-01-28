"use server";

import { getAPI, postAPI } from "@/apis/API";

export const getAnalyedExperience = async (params = {}) => getAPI("/experience", params);
export const postExperience = async (experience: any) => postAPI("experience", experience);
