import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [arr, setarr] = useState(1);

  //   useEffect(() => {
  //     const ti = setInterval(() => {
  //       setarr((v) => v + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(ti);
  //     };
  //   }, []);

  return <div>{arr}</div>;
};
