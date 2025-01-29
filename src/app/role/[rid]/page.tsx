"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import useRole from "@/app/_store/role";
import { getStrongPoint } from "@/app/role/_action/action";

export default function RoleAI() {
  const router = useRouter();
  const { role, strongPoint, setStrongPoint } = useRole();

  useEffect(() => {
    (async () => {
      const roleData = await getStrongPoint(role);
      if (roleData === null) return;
      setStrongPoint(roleData.strongPoint);
    })();
  }, []);

  const goNextPage = useCallback(() => {
    router.push(`/experience`);
  }, []);

  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>{role} 직군에는 이런 강점이 필요합니다!</p>
      {strongPoint.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
      <button onClick={goNextPage}>다음으로</button>
    </div>
  );
}
