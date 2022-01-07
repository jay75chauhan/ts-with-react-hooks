import React, { useContext } from "react";
import context from "../store";
import { useState } from "react";
import { userState } from "../store";

function ConsumerComponents() {
  const user = useContext(context);

  return (
    <div>
      <h1>{user.last}</h1>
      <h1>{user.first}</h1>
    </div>
  );
}

const UseContext = () => {
  const [user, setUser] = useState<userState>({
    first: "jayw",
    last: "chauhsd",
  });

  return (
    <context.Provider value={user}>
      <ConsumerComponents />

      <button onClick={() => setUser({ ...user, first: "jay" })}>
        change text
      </button>
    </context.Provider>
  );
};
export default UseContext;
