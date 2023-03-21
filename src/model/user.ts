export type UserStructure = {
  id: string;
  email: string;
  passwd: string;
  token?: string;
};

export type ServerType = {
  results: UserStructure[];
};
export type TokenResponse = {
  token: string;
};

export class User implements UserStructure {
  constructor(public id: string, public email: string, public passwd: string) {}
}
