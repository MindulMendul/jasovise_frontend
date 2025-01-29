"use client";

import { postEssay } from "@/apis/essayAPI";
import useEssay from "@/app/_store/essay";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEventHandler, useCallback } from "react";

const data = [
  { category: "성공경험", explanation: "성공경험에 대해 말해주세요." },
  { category: "직무관련 경험", explanation: "직무관련 경험에 대해 말해주세요." },
  { category: "팀워크 & 창의성경험", explanation: "팀워크 & 창의성경험에 대해 말해주세요." },
  { category: "지원동기", explanation: "지원동기에 대해 말해주세요." },
  { category: "입사 후 포부", explanation: "입사 후 포부에 대해 말해주세요." },
  { category: "성격의 장단점", explanation: "성격의 장단점에 대해 말해주세요." },
  { category: "성장과정", explanation: "성장과정에 대해 말해주세요." },
  { category: "최근이슈", explanation: "(최근이슈)에 대한 자신의 생각을 서술해주세요." },
  { category: "의견제시", explanation: "(어떤이슈)에 대한 의견을 제시주세요." },
  { category: "직업윤리", explanation: "(직업이슈)에 대한 자신의 생각을 말해주세요." },
];

export default function Essay() {
  const { category, essay, setCategory, setEssay } = useEssay();
  const router = useRouter();

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const handleEssay = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEssay(e.target.value);
  };

  const submit = useCallback(async () => {
    const [data, error] = await postEssay({
      category: category,
      essay: essay,
    });
    router.push(`/essay/${1}`);
  }, []);

  return (
    <div className="grid grid-flow-col grid-cols-4">
      <div className="grid items-center">
        {data.map((e, key) => (
          <button className="grid-cols-12" key={key} value={e.category} onClick={handleCategory}>
            {e.category}
          </button>
        ))}
      </div>
      <div className="grid">{"대충 자기소개서 분석한 내용"}</div>
      <div className="col-span-2 grid justify-items-center">
        <h1>자기소개서 문항</h1>
        <div>{"카테고리 별 질문지"}</div>
        <textarea onChange={handleEssay} />
        <button onClick={submit}>제출</button>
      </div>
    </div>
  );
}
