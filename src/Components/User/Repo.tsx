import { FC } from "react";
import { typeRepo } from "./interfaceUser";
import C from "./User.module.css";
export const Repo: FC<typeRepo>= ({
    name, 
    html_url,
    forks ,
    stargazers_count,
    id
}) => {
  return <a className={C.Repo} href={html_url}>
    <h2>
        {name}
    </h2>
    <div className={C.C_forks_starts}>
        <p>{forks} Forks</p>
        <p>{stargazers_count} Starts</p>
    </div>
  </a>;
};
