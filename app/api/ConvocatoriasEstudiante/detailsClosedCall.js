import api_instance from "../base.api";

const endpoint = "/call/closed";

/**
 * DESCRIPTION:
 * Used to view all details of the specific closed call. 
 * 
 * OUTPUTS:
    
 * 
 */
export const apiDetailsClosedCall = {
  getDetailsClosedCall: function (id, token) {
    return api_instance.get(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};
