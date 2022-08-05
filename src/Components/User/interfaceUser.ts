export interface typeRepo {
    name : string,
    html_url : string,
    forks : number,
    stargazers_count : number,
    id:number

}

export interface typeGetUser {
    id: number;
    location: string | null;
    name: string | null;
    email: string | null;
    following: number;
    followers: number;
    avatar_url: string;
    login: string;
    created_at: string;
  }