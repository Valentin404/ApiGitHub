import { FC, ReactNode, useMemo, useState } from "react";
import { typeAllRepos, typeRepo } from "./interfaceUser";
import { Repo } from "./Repo";
import C from "./User.module.css";



export  const AllRepos : FC<typeAllRepos> = ({name,repos}) => {
    const [reposFilter, setReposFilter] = useState<typeRepo[] | []>(repos);

    
  const reposMemo = useMemo(
    (): ReactNode[] =>
      reposFilter.map((rep: typeRepo) => <Repo key={rep.id} {...rep} />),
    [reposFilter]
  );

    const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReposFilter(
          repos.filter((rep) =>
            rep.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      };
      const resultSearch =
      reposFilter.length == 0
        ? "User does not have a repository with that name"
        : reposMemo;

    if(repos.length == 0) return <>user has no Repositories</>

    return <>
             <input
                type="text"
                placeholder={`Search for ${
                  name ? name : "User"
                }'s Repositories`}
                onChange={onChangeFilter}
                className={C.input}
              />
              <div className={C.C_repos}>
                {resultSearch}
              </div>
    </>
}