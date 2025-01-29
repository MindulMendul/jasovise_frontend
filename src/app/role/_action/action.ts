"use server";

import { getAnalyedRole } from "@/apis/roleAPI";

export const getStrongPoint = async (role: any) => {
  let [data, error] = await getAnalyedRole(role);
  if (error) {
    console.error(error);
    return null;
  }
  return roleData;
};

const roleData = {
  role: "민둘랭가이드",
  strongPoint: ["똥멍청이", "근데잘생김"],
};
