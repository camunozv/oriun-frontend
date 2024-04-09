import api_instance from "../base.api";

const endpoint = "call/closed";

export const apiFilterClosedCalls = {
  
  //Tested
  getFilterClosedCalls: function (country, language, university_name, token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        country: country,
        language: language,
        university_name: university_name,
      },
    });
  },
};
