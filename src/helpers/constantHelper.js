import "dotenv/config";
/**
 * A file where urls should be kept as well as other env variables
 * @since version 1
 */

// eslint-disable-next-line no-undef
const { REACT_APP_BASE_URL_BACKEND } = process.env;
const JWT_TOKEN = "ASF";
const LOGGED_USER = "ASF_USER";
const ROLES = {
  ADMIN: "ADMIN",
  CONSUMER: "CONSUMER",
};

const backend = {
  baseUrl: REACT_APP_BASE_URL_BACKEND || "http://localhost:4000",
};

export { backend, JWT_TOKEN, LOGGED_USER, ROLES };
