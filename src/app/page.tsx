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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>자소바이저</h1>
      <div>자소바이저는 여러분의 꿈을 응원합니다.</div>
      <div>어떤 직군에서 근무하실 예정이신가요?</div>
    </div>
  );
}
