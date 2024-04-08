import api_instance from "./base.api";

const endpoint = "api-token/";

export const apiLogin = {
  postUser: (username, password) => {
    console.log(endpoint)
    return api_instance.post(`${endpoint}`, { username, password });
  },
};
