import api_instance from "../base.api";

const endpoint = "/call/university_api";

/**
 * "Authorization": `Bearer ${token}`,
 */

export const apiAdminUniversities = {
  getAllUniversities: function (token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  },

  getUniversitiesById: function (id, token) {
    return api_instance.get(`${endpoint}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  },

  postUniversities: function (
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
      {
        name,
        webpage,
        region,
        country,
        city,
        academic_offer,
        exchange_info,
      },
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  },
};
