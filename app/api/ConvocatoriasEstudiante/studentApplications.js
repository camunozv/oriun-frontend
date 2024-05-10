import api_instance from "../base.api";

const endpoint = "application";

export const apiStudentApplications = {

  getAllApplications: function (token) {
    return api_instance.get(`${endpoint}/student/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
    });
  },

  getRegionFromCall: function (call_id, token) {
    return api_instance.get(`${endpoint}/region_call/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call_id,
      },
    });
  },

  getApplicationComments : function (call_id, token) {

    return api_instance.get(`${endpoint}/comments/`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
        params: {
          call: call_id,
        },
      });
  },

  getApplicationDocument : function (call_id, file_type, file_name, token) {

    return api_instance.get(`${endpoint}/download/`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
        params: {
          call: call_id,
          type_file: file_type,
          name_file: file_name
        },
      });
  },

  putDocumentModification: function (call, document, name_file, token) {

    return api_instance.put(`${endpoint}/edit/`,{call, document, name_file},{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
  }
};
