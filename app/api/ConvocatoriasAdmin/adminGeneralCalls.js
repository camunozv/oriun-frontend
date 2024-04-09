// call/ api/ [name='calls_list']
// call/ api/<int:pk>/ [name='calls_detail']
import api_instance from "../base.api";

// 6 methods implemented here.
const endpoint = "call/api/";

export default apiAdminCalls = {
  getAdminCalls: function (token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  getAdminCallsDetails: function (id, token) {
    return api_instance.get(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  postAdminCalls: function (
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
    univerisity_id,
    token
  ) {
    return api_instance.post(
      `${endpoint}`,
      {
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
        univerisity_id,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },
  // url, data , config
  putAdminCallsUpdate: function (
    id,
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
    univerisity_id,
    token
  ) {
    return api_instance.put(
      `${endpoint}/${id}`,
      {
        id,
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
        univerisity_id,
        token,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },

  patchAdminCallsUpdate: function (
    id,
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
    univerisity_id,
    token
  ) {
    return api_instance.patch(
      `${endpoint}/${id}`,
      {
        id,
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
        univerisity_id,
        token,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },

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

};
