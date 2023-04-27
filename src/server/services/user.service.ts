export class UserService {
  async login({ user, password }: { user: string; password: string | number }) {
    return { user, password };
  }
}
