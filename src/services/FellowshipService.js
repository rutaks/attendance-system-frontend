import { axiosImpl, getAxiosError } from "../helpers/axiosHelper";

class FellowshipService {
  static async getFellowships() {
    try {
      const { data } = await axiosImpl({}).get(`/fellowships`);
      return { status: true, body: data.body };
    } catch (error) {
      return { status: false, error: getAxiosError(error) };
    }
  }
}

export default FellowshipService;
