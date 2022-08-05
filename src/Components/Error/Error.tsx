import {
    FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { deletedError } from "../../help";
import {  StoreContext } from "../../store";
import './Error.scss'

export interface bodyError {
  text : string,
  id : string
}

interface typeMinierror extends bodyError {
  i: number;
}

export const Error :FC = () => {
  const store = useContext(StoreContext);
  const arrErrors = store.Error.arrErrors;


  const errorsMemo = useMemo(
    (): ReactNode[] =>
      arrErrors.map((dataError: bodyError, i: number) => (
        <MiniError key={dataError.id} i={i} {...dataError} />
      )),
    [store.Error.arrErrors.length]
  );



  if (arrErrors.length == 0) return <></>;
  return <>{errorsMemo}</>;
};



const MiniError :FC<typeMinierror>= ({ text, id, i }) => {
  const [isError, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        deletedError(id)
      setError(true);
    }, 4000);
  }, []);
  const top = (i + 1) * 70 + "px";

  if (isError) return <></>;
  return (
    <div style={{ top: top }} className={'C_error'}>
      {text}
    </div>
  );
};
