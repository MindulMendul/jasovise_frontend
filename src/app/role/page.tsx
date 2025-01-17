"use client"

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useRole from "../_store/role";

const roleData=[
  "adfs"
];

export default function Role() {
  const router = useRouter();
  const {role, setRole}= useRole();

  useEffect(()=>{
  },[]);

  const search = useCallback((e:any)=>{
    setRole(e.target.value);
  },[role, router]);

  const goNextPage = useCallback(()=>{
    if(role.length>0) router.push(`/role/${role}`);
    else alert("직군을 입력해주세요!");
  }, [role, router]);

  const goSkip = useCallback(()=>{
    router.push(`/experience`);
  }, []);

  const chooseRole = useCallback((e:any)=>{
    setRole(e.target.value);
    router.push(`/role/${role}`);
  },[role, router]);

  return (
    <div className="grid justify-items-center">
      <h1>자소바이저</h1>
      <p>직군을 검색해주세요.</p>
      <div className="d-flex">
        <input onChange={search}/>
        <button onClick={goNextPage}>검색</button>
      </div>
      {roleData.map((e, i)=>(
        <button key={i} value={e} onClick={chooseRole}>{e}</button>
      ))}
      <button onClick={goSkip}>스킵하기</button>
    </div>
  );
}
