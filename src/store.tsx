import { createContext } from "react";
import { bodyError } from "./Components/Error/Error";


export interface typeStore {
  Error: {
    arrErrors: bodyError[] | [];
  },
  Search : {
    arrResult: string[]
  }
}
export const store: typeStore = {
  Error: {
    arrErrors: [],
  },
  Search : {
    arrResult : []
  }
};

export const StoreContext = createContext<typeStore>(store);
