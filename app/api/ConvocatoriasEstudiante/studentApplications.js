import api_instance from "../base.api";

const endpoint_1 = "application";
const endpoint_2 = "student";

export const apiStudentApplications = {
  // Use Case #4:
  // Implemented: *
  getStudentEligibility: function (call, token) {
    return api_instance.get(`${endpoint_2}/eligible/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call,
      },
    });
  },

  // Implemented *
  getStudentInformation: function (token) {
    return api_instance.get(`${endpoint_2}/info_application/`, {
      headers : {
        "Authorization" : `Bearer ${token}`
      },
    })
  },

  // Implemented: *
  postCreateDocuments: function (
    medication,
    diseases,
    contact_person,
    call,
    info_mobility,
    info_courses,
    token
  ) {
    return api_instance.post(
      `${endpoint_1}/create_forms/`,
      {
        medication,
        diseases,
        contact_person,
        call,
        info_mobility,
        info_courses,
      },
      {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
      }
    );
  },

  // Implemented: *
  getDocument: function (call, type_file, name_file, token) {
    return api_instance.get(`${endpoint_1}/download/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call,
        type_file: type_file,
        name_file: name_file,
      },
    });
  },

  // Implemented: *
  postDocument: function (call, document, name_file, token) {
    return api_instance.post(
      `${endpoint_1}/upload/`,
      { call, document, name_file },
      {
        headers: {
          "Authorization" : `Bearer ${token}`,
        },        
      }
    );
  },

  // Implemented: Error in the backend.
  postApplication: function (call, is_extension, token) {
    return api_instance.post(
      `${endpoint_1}/submit/`,
      { call, is_extension },
      {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
      }
    );
  },

  // Use Case #5:
  // Implemented: *
  getAllApplications: function (token) {
    return api_instance.get(`${endpoint_1}/student/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
    });
  },

  // Implemented: *
  getRegionFromCall: function (call_id, token) {
    return api_instance.get(`${endpoint_1}/region_call/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call_id,
      },
    });
  },

  // Implemented: *
  getApplicationComments: function (call_id, token) {
    return api_instance.get(`${endpoint_1}/comments/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call_id,
      },
    });
  },

  // Same as endpoint getDocument, but finally implemented
  getApplicationDocument: function (call_id, file_type, file_name, token) {
    return api_instance.get(`${endpoint_1}/download/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
      params: {
        call: call_id,
        type_file: file_type,
        name_file: file_name,
      },
    });
  },

  // Implemented: *
  putDocumentModification: function (call, document, name_file, token) {
    return api_instance.put(
      `${endpoint_1}/edit/`,
      { call, document, name_file },
      {
        headers: {
          "Authorization" : `Bearer ${token}`
        },
      }
    );
  },

  // Use Case 8
  // Implemented: *
  getApplicationResults: function (call_id, token) {

    return api_instance.get(`${endpoint_1}/results/${call_id}`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      },
    })
  }
};
