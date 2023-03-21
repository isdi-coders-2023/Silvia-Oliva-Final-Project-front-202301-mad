import { ServerType, UserStructure, TokenResponse } from "../model/user";
import { URL_AMIGURUMIS_USERS } from "../variables";
import { Repo } from "./user.repo.interface";

export class UsersRepo implements Repo<ServerType> {
  url: string;
  constructor() {
    this.url = URL_AMIGURUMIS_USERS;
  }

  async create(
    registerForm: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<ServerType> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(registerForm),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const serverResponse = await resp.json();

    return serverResponse;
  }

  async update(
    registerForm: Partial<UserStructure>,
    urlExtraPath: string,
    token: string
  ): Promise<ServerType> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(registerForm),
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async login(
    loginInfo: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<TokenResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }
}
