import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";

class MemberService {
  static async getMembers() {
    try {
      const { data } = await axiosImpl({}).get(`/members`);
      return { status: true, response: data };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }
}

export default MemberService;
