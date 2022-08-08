import {
  FC,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { GitHub } from "../../api";
import { Loading } from "../Loading/Loading";
import C from "./User.module.css";
import notAva from "../Error/img/notAva.png";
import { typeGetUser, typeRepo } from "./interfaceUser";
import { AllRepos } from "./AllRepos";

export const User: FC = () => {
  const [user, setUser] = useState<typeGetUser | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoadingRepos, setLoadingRepos] = useState<boolean>(true);
  const [repos, setRepos] = useState<typeRepo[] | []>([]);
  const id_GitHub: string | undefined = useParams().id_GitHub;

  const changeAvatarUser = (e: SyntheticEvent<HTMLImageElement, Event>) =>
    (e.currentTarget.src = notAva);
  useEffect(() => {
    if (id_GitHub == undefined) return;
    GitHub.getUser(id_GitHub)
      .then(setUser)
      .catch(({ message }: { message: string }) => setError(message));

    GitHub.getRepos(id_GitHub)
      .then((arrRepos: typeRepo[]) => {
        setRepos(arrRepos);
      })
      .catch(({ message }: { message: string }) => setError(message))
      .finally(() => setLoadingRepos(false));
  }, []);

  if (error !== "")
    return (
      <div className={C.C_center}>
        <p>User not found</p>
        <p>{error}</p>
      </div>
    );
  if (user == null) return <Loading />;

  return (
    <div className={C.G_C_User}>
      <div className={C.C_User}>
        <div className={C.C_UserForData}>
          <img
            onError={changeAvatarUser}
            src={user.avatar_url}
            alt="Loading..."
          />
          <div className={C.G_data}>
            <h2>{user.name ? user.name : "user has no name"}</h2>
            <p>{user.email ? user.email : "user has no email"}</p>
            <p>{user.location ? user.location : "user has no location"}</p>
            <p>{user.created_at}</p>
            <p>{user.followers} followers</p>
            <p>following {user.following}</p>
          </div>
        </div>
        <p className={C.center}>
          This is their biolography. It many be long and needs to all fit
        </p>

        <div className={C.G_C_repos}>
          {isLoadingRepos ?  <Loading /> : <AllRepos name={user.name} repos={repos} /> }
        </div>
      </div>
    </div>
  );
};
