import React, { useState } from "react";

export const UseState = () => {
  const [arr, setarr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>("");

  return (
    <div>
      <div>
        <button onClick={() => setarr([...arr, arr.length + 1])}>
          Add to array
        </button>

        {JSON.stringify(arr)}
      </div>

      <div>
        <button onClick={() => setName("jay")}>setName</button>

        {JSON.stringify(name)}
      </div>
    </div>
  );
};
