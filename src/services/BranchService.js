import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";

class BranchService {
  static async getBranches() {
    try {
      const { data } = await axiosImpl({}).get(`/branches`);
      return { status: true, body: data.body };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }
}

export default BranchService;
