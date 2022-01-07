import { type } from "os";
import { createContext } from "react";

const initialState = {
  first: "jay",
  last: "chauhan",
};

export type userState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
