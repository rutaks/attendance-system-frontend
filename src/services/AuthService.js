import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";
import { JWTToken } from "../helpers/constantHelper";

class AuthService {
  static async login(request) {
    try {
      const { data } = await axiosImpl({}).post(`/auth/login`, request);
      localStorage.setItem(JWTToken, data.body.token);
      return { status: true };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }
}

export default AuthService;
