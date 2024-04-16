import api_instance from "../base.api";

const endpoint = "call/api";

export const apiAdminCalls = {
  // Endpoint no.6 Implemented
  getAdminAllCalls: function (token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  // Endpoint no.7 Implemented
  getAdminCallsDetails: function (id, token) {
    return api_instance.get(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  // Endpoint no.8 Implemented
  postAdminCalls: function (
    university_id,
    active,
    begin_date,
    deadline,
    min_advance,
    min_papa,
    format,
    study_level,
    year,
    semester,
    language,
    description,
    available_slots,
    note,
    highest_papa_winner,
    minimum_papa_winner,
    selected,
    token
  ) {
    return api_instance.post(
      `${endpoint}/`,
      {
        university_id,
        active,
        begin_date,
        deadline,
        min_advance,
        min_papa,
        format,
        study_level,
        year,
        semester,
        language,
        description,
        available_slots,
        note,
        highest_papa_winner,
        minimum_papa_winner,
        selected,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },

  // Endpoint no.9 Implemented
  putAdminCallsUpdate: function (
    id,
    university_id,
    active,
    begin_date,
    deadline,
    min_advance,
    min_papa,
    format,
    study_level,
    year,
    semester,
    language,
    description,
    available_slots,
    note,
    highest_papa_winner,
    minimum_papa_winner,
    selected,
    token
  ) {
    return api_instance.put(
      `${endpoint}/${id}/`,
      {
        university_id,
        active,
        begin_date,
        deadline,
        min_advance,
        min_papa,
        format,
        study_level,
        year,
        semester,
        language,
        description,
        available_slots,
        note,
        highest_papa_winner,
        minimum_papa_winner,
        selected,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },

  // Endpoint no.10 Implemented well tested
  deleteAdminCalls: function (id, token) {
    return api_instance.delete(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        id: id,
      },
    });
  },

  // patchAdminCallsUpdate: function (
  //   id,
  //   active,
  //   begin_date,
  //   deadline,
  //   min_advance,
  //   min_papa,
  //   format,
  //   study_level,
  //   year,
  //   semester,
  //   language,
  //   description,
  //   available_slots,
  //   note,
  //   highest_papa_winner,
  //   minimum_papa_winner,
  //   selected,
  //   univerisity_id,
  //   token
  // ) {
  //   return api_instance.patch(
  //     `${endpoint}/${id}`,
  //     {
  //       id,
  //       active,
  //       begin_date,
  //       deadline,
  //       min_advance,
  //       min_papa,
  //       format,
  //       study_level,
  //       year,
  //       semester,
  //       language,
  //       description,
  //       available_slots,
  //       note,
  //       highest_papa_winner,
  //       minimum_papa_winner,
  //       selected,
  //       univerisity_id,
  //       token,
  //     },
  //     {
  //       headers: {
  //         '''Authorization''': `Bearer ${token}`,
  //       },
  //     }
  //   );
  // },

};
