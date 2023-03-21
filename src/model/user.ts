export type UserStructure = {
  id: string;
  username: string;
  email: string;
  password: string;
  token?: string;
};

export type ServerType = {
  results: UserStructure[];
};

export class User implements UserStructure {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public password: string
  ) {}
}
