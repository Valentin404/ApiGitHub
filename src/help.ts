import  { generate  as id} from "shortid";
import { bodyError } from "./Components/Error/Error";
import {  store, typeStore } from "./store";

export const  addError = (text : string) => {
    const newError : bodyError = {
     id : id(),
     text : text
    }
     store.Error.arrErrors = [newError, ...store.Error.arrErrors]
 }
export const deletedError = (id : string) => {
    store.Error.arrErrors = store.Error.arrErrors.filter(
        (error) => error.id !== id
      );
}


export default {
    addError,
    deletedError
}