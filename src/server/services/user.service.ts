import { login } from "../types/login.type";
export class UserService {
  async login({ user, password }: login) {
    return { user, password };
  }
}
