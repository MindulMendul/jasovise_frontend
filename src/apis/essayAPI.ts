"use server";

import { getAPI, postAPI } from "@/apis/API";

export const getAnalyedEssay = async (params = {}) => await getAPI(`/essay`, params);
export const postEssay = async (essay: PostEssayAPI) => await postAPI(`/essay`, essay);
