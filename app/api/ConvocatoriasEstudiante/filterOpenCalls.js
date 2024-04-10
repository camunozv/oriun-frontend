import api_instance from "../base.api";

const endpoint = "call/open/";

export const apiFilterOpenCalls = {

  //Tested
  getFilterOpenCalls: function (country, language, name_university, token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        countries: country,
        name_university: name_university,
        languages: language,
      },
    });
  },
};

