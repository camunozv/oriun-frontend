import api_instance from "../base.api";

const endpoint_1 = "/person/code/";
const endpoint_2 = "/student/post/";
const endpoint_3 = "/employee/post/";

export const apiRegisterAdmin = {

  postInfoVerificationCode: function (id, email) {
    return api_instance.post(`${endpoint_1}`, { id, email });
  },

  postUserStudent: function (
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
    PAPA,
    PBM,
    advance,
    is_enrolled,
    num_semesters,
    diseases,
    medication,
    faculty,
    major,
    admission,
    study_level,
    certificate_grades,
    certificate_student,
    payment_receipt
  ) {
    return api_instance.post(`${endpoint_2}`, {
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
      PAPA,
      PBM,
      advance,
      is_enrolled,
      num_semesters,
      diseases,
      medication,
      faculty,
      major,
      admission,
      study_level,
      certificate_grades,
      certificate_student,
      payment_receipt,
    });
  },

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
    return api_instance.post(`${endpoint_3}`, {
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
