import api_instance from "../base.api";

const endpoint = "/call/closed";

export const apiDetailsClosedCall = {

    //Tested
  getDetailsClosedCall: function (id, token) {
    return api_instance.get(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};
