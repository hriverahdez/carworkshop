export interface Role {
  id?: number;
  name?: string;
  description?: string;
}

export interface AuthUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: Role;
  clientID?: string | number;
}
