import { makeAutoObservable } from "mobx";

class AuthApi {
  token: string | null = localStorage.getItem('token');
  username: string = "";
  password: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  login(username: string, password: string) {
    if (username === this.username && password === this.password) {
      localStorage.setItem("token", "1112313");
      this.token = localStorage.getItem("token");
    }
  }
  //
  register(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  logout() {
    localStorage.removeItem("token");
    this.token = null;
  }
}

export default new AuthApi();
