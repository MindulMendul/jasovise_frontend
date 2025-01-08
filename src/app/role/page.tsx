"use client"

const roleData=[
  "adfs"
];

export default function Role() {
  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>직군을 선택해주세요.</p>
      {roleData.map((e, i)=>(
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}
