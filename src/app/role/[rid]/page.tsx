"use client"

import { useCallback } from "react";
import { useRouter } from "next/navigation";

const roleData={
  role: "민둘랭가이드",
  stringPoints: ["똥멍청이", "근데잘생김"]
}

export default function RoleAI() {
  const router = useRouter();

  const goNextPage = useCallback(()=>{
    router.push(`/experience`);
  }, []);

  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>{roleData.role} 직군에는 이런 강점이 필요합니다!</p>
      {roleData.stringPoints.map((e, i)=>(
        <div key={i}>{e}</div>
      ))}
      <button onClick={goNextPage}>다음으로</button>
    </div>
  );
}
