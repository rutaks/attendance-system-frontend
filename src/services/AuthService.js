import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";
import { JWT_TOKEN, LOGGED_USER } from "../helpers/constantHelper";

class AuthService {
  static async login(request) {
    try {
      const { data } = await axiosImpl({}).post(`/auth/login`, request);
      localStorage.setItem(JWT_TOKEN, data.body.token);
      localStorage.setItem(LOGGED_USER, JSON.stringify(data.body.user));
      return { status: true };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }

  static logout() {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(LOGGED_USER);
  }
}

export default AuthService;
