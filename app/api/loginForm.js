import api_instance from "./base.api";

const endpoint = "api-token/";

export const loginAPI = {
  postUser: (username, password) => {
    return api_instance.post(`${endpoint}`, { username, password });
  },
};
