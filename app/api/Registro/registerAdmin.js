import api_instance from "../base.api";

const endpoint = "";

export const apiRegisterAdmin = {
  postUserAdmin: function (
    email,
    password,
    verif_code,
    id,
    first_name,
    last_name,
    type_document,
    birth_place,
    birth_date,
    country,
    city,
    phone,
    address,
    sex,
    ethnicity,
    headquarter
  ) {
    return api_instance.post(`${endpoint}`, {
      email,
      password,
      verif_code,
      id,
      first_name,
      last_name,
      type_document,
      birth_place,
      birth_date,
      country,
      city,
      phone,
      address,
      sex,
      ethnicity,
      headquarter,
    });
  },
};
