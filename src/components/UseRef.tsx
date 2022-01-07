import React, { useEffect } from "react";
import { useState } from "react";

export const UseRef = () => {
  const inputref = React.useRef<HTMLInputElement>(null);

  const [state4, setstate4] = useState<string>();

  useEffect(() => {}, [inputref]);

  return (
    <div>
      <input ref={inputref} type="text" />

      <div>
        <button onClick={() => setstate4(inputref.current?.value)}>
          _______
        </button>
        <h3>{state4}</h3>
      </div>
    </div>
  );
};
