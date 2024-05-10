import { headers } from "next/headers";
import api_instance from "../base.api";

const endpoint_1 = "application";
const endpoint_2 = "student";

export const apiStudentApplications = {
  // Use Case #4:
  /**
   * 
   * medication	String	Medication the student might take, it can be an empty string (which means the student does not take any medication). It is not obligatory.
diseases	String	Diseases the student might have, it can be an empty string (which means the student does not have any disease). It is not obligatory.
contact_person	JSON	Information of the contact person of the student. You must send all the values in the JSON (if you decide to send it) or the contact_person must be known before hand (part of the output of the second endpoint), that's why you must check that these fields (in the frontend) are not empty. In the second case (info was known before) do not send anything.
call	Integer	ID of the call the student wants to apply. It is obligatory.
info_mobility	JSON	Basic information about the mobility that is not in the call model. If the student doesn't put any information, do not send an empty string. It is not obligatory.
info_courses	List of JSONs	Information about the courses the student wants to take. If the student doesn't put any information, do not send an empty string. It is not obligatory.
   * 
   * "Authorization" : `Bearer ${token}`
   */
  
  getStudentEligibility: function (call, token) {
    return api_instance.get(`${endpoint_2}/eligible/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        call: call,
      },
    });
  },

  getStudentInformation: function (token) {
    return api_instance.get(`${endpoint_2}/info-application/`, {
      headers : {
        Authorization: `Bearer ${token}`,
      },
    })
  },

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
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getDocument: function (call, type_file, name_file, token) {
    return api_instance.get(`${endpoint_1}/download/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        call: call,
        type_file: type_file,
        name_file: name_file,
      },
    });
  },

  postDocument: function (call, document, name_file, token) {
    return api_instance.post(
      `${endpoint_1}/upload/`,
      { call, document, name_file },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  postApplication: function (call, is_extension, token) {
    return api_instance.post(
      `${endpoint_1}/submit/`,
      { call, is_extension },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  // Use Case #5:
  getAllApplications: function (token) {
    return api_instance.get(`${endpoint_1}/student/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getRegionFromCall: function (call_id, token) {
    return api_instance.get(`${endpoint_1}/region_call/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        call: call_id,
      },
    });
  },

  getApplicationComments: function (call_id, token) {
    return api_instance.get(`${endpoint_1}/comments/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        call: call_id,
      },
    });
  },

  getApplicationDocument: function (call_id, file_type, file_name, token) {
    return api_instance.get(`${endpoint_1}/download/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        call: call_id,
        type_file: file_type,
        name_file: file_name,
      },
    });
  },

  putDocumentModification: function (call, document, name_file, token) {
    return api_instance.put(
      `${endpoint_1}/edit/`,
      { call, document, name_file },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
