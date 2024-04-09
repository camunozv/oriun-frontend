import api_instance from "../base.api";

const endpoint = "call/university_api/";

export const apiAdminUniversity = {
  getAdminUniversities: function (token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  postAdminUniversities: function (
    name,
    webpage,
    region,
    country,
    city,
    academic_offer,
    exchange_info,
    token
  ) {
    return api_instance.post(
      `${endpoint}`,
      { name, webpage, region, country, city, academic_offer, exchange_info },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },
};
