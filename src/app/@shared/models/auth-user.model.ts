export interface Role {
  id?: string | number;
  name?: string;
  description?: string;
}

export interface AuthUser {
  id?: string | number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: Role;
  clientID?: string | number;
}
