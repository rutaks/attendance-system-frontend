import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";

class MemberService {
  static async getMembers({ page = 0, size = 0 }) {
    try {
      const {
        data: { body },
      } = await axiosImpl({}).get(`/members`);
      return { status: true, response: body };
    } catch (error) {
      throw getAxiosError(error);
    }
  }

  static async createMember(member) {
    try {
      const { data } = await axiosImpl({}).post(`members`, member);
      return { status: true, response: data };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }
}

export default MemberService;
