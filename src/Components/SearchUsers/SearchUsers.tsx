import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { ListUser } from "./ListUser";
import { GitHub } from "../../api";
import { typeGetUser } from "./interfaceSearchUsers";
import { Error } from "../Error/Error";
import { addError } from "../../help";
import "./SearchUsers.scss";
import { local_ARR_RESULT } from "../../localStorage";

export const SearchUsers: FC = () => {
  const [value, setValue] = useState<string>("");
  const [users, setUsers] = useState<typeGetUser[] | []>([]);

  useEffect(() => {
    GitHub.getAllUser()
    .then(setUsers)
  }, []);

  const getUser = () => {
    if (value.trim() == "") return;
    GitHub.getUser(value)
      .then((user : typeGetUser) => {
        if (users.find((findUser) => user.id == findUser.id)) {
          addError("such user already exists");
          setValue("");
          return;
        }
        local_ARR_RESULT.set(user.login);
        setUsers([user, ...users]);
        setValue("");
      })
      .catch(({ message }: { message: string }) => {
        addError(message);
        setValue("");
      });
  };
  const getForEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter") return;
    getUser();
  };

  const usersMemo = useMemo(
    (): ReactNode[] =>
      users.map((user) => <ListUser key={user.id} {...user} />),
    [users]
  );

  return (
    <div className={"C_Search"}>
      <Error />
      <div className={"C_HeaderSearch"}>
        <input
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onKeyPress={getForEnter}
          placeholder="Search for Users"
          onBlur={getUser}
        />
      </div>
      <div className={"C_Users"}>{usersMemo}</div>
    </div>
  );
};
