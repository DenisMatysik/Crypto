import React from "react";
import { useSelector } from "react-redux";

export default function AboutCrypto() {
  const check: any = useSelector((state: any) => state.crypto.cryptoAll);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
      reprehenderit, enim saepe quia explicabo cupiditate, quod eos rem itaque
      eveniet vero ducimus ex. Laboriosam, nulla modi impedit perspiciatis
      suscipit sit.
    </div>
  );
}
