export interface UserModel {
  id: number;
  email: string;
  password: string;
  name: string;
  balance: number;
  address: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  address: string;
  balance: number;
}

export interface CreateUserResponse {
  id: number;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  token: string;
}
