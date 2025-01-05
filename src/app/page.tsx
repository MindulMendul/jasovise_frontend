"use client";

import useJaso from "@/app/_store/store";
import { ChangeEvent, useCallback } from "react";

export default function Home() {
  const { jaso, setJaso } = useJaso();

  const handleJaso = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setJaso(e.target.value);
    },
    [jaso, setJaso]
  );

  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>자소바이저는 여러분의 꿈을 응원합니다.</p>
      <p>
        어떤 직군에서 근무하실 예정이신가요?
        <input type={"text"} />
      </p>
      {/* 직군 검색하면 그에 맞는 역량을 추천해줌 */}
    </div>
  );
}
