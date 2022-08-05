import { FC, SyntheticEvent } from "react";
import { typeGetUser } from "./interfaceSearchUsers";
import notAva from "../Error/img/notAva.png";
import { Link } from "react-router-dom";
import './SearchUsers.scss'
export const ListUser: FC<typeGetUser> = ({
  id,
  avatar_url,
  public_repos,
  name,
  login,
}) => {
  const changeAvatarUser = (e: SyntheticEvent<HTMLImageElement, Event>) =>
    (e.currentTarget.src = notAva);

  return (
    <div className={'user'}>
      <div className={'C_forImg_Name'}>
        <img onError={changeAvatarUser} src={avatar_url} alt="Loading..." />
        <Link to={"/" + login}>
          <h2>{name ? name : "user has no name"}</h2>
        </Link>
      </div>
      <p>Repo: {public_repos}</p>
    </div>
  );
};
