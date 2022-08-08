import axios from "axios";
import { typeGetUser } from "./Components/SearchUsers/interfaceSearchUsers";
import { typeRepo } from "./Components/User/interfaceUser";
import { local_ARR_RESULT } from "./localStorage";
const Api_GitHub = axios.create({
  baseURL: "https://api.github.com/users",
});

interface typeApiGitHub {
  getUser: (login: string) => Promise<typeGetUser | any>;
  getRepos: (login: string) => Promise<typeRepo | any>;
  getAllUser : ()=>  Promise<any[]>
 
}

export const GitHub: typeApiGitHub = {
  getUser: (login: string) =>
    Api_GitHub.get(login).then((json) =>
      json.status === 200 ? json.data : null
    )
    .then(({ id, avatar_url, public_repos, name, login } : typeGetUser)=>{
      const user: typeGetUser = {
        login,
        id,
        avatar_url,
        public_repos,
        name,
      };
      return user
    })
    ,
  getRepos: (login: string) =>
    Api_GitHub.get(login + "/repos").then((json) =>
      json.status === 200 ? json.data : null
    ),
  getAllUser : function()  {
    const data : null | string[] = local_ARR_RESULT.get();
    if(data == null) return Promise.reject('not users');
   return axios.all(data.map((login : string) => this.getUser(login)))
  }
};

