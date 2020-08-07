import "dotenv/config";
/**
 * A file where urls should be kept as well as other env variables
 * @since version 1
 */

// eslint-disable-next-line no-undef
const { REACT_APP_BASE_URL_BACKEND } = process.env;

const JWTToken = "ASF";

const backend = {
  baseUrl: REACT_APP_BASE_URL_BACKEND || "http://localhost:4000",
};

export { backend, JWTToken };
