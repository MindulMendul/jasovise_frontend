import Link from "next/link";

export default function Home() {
  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>자소바이저는 여러분의 꿈을 응원합니다.</p>
      <Link href={"/role"}><button>시작하기</button></Link>
    </div>
  );
}
