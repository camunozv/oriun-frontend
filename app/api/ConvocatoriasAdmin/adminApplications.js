import api_instance from "../base.api";

const endpoint = "application";

export const adminApplications = {

  // #1 Implemented
  getGeneralApplications: function (
    student_id,
    call_id,
    state_documents,
    token
  ) {
    return api_instance.get(`${endpoint}/applicants/${call_id}/`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { student_id, state_documents },
    });
  },

  // #2 Not necessary to implement.
  getStudentApplication: function (call_id, student_id, token) {
    return api_instance.get(
      `${endpoint}/student-info/${call_id}/${student_id}/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },

  // #3 Implemented
  getStudentDocuments: function (call_id, student_id, token) {
    return api_instance.get(`${endpoint}/documents/${call_id}/${student_id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // #4 
  putApplicationModification: function (call_id, student_id, token) {
    return api_instance.put(
      `${endpoint}/modify/${call_id}/${student_id}/`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },

  // #5
  putAcceptDocuments: function (call_id, student_id, token) {
    return api_instance.put(
      `${endpoint}/accept-documents/${call_id}/${student_id}/`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },

  // #6
  postCommentApplication: function (call_id, student_id, comment, token) {
    return api_instance.post(
      `${endpoint}/add_comment/${call_id}/${student_id}/`,
      { comment },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },

  // #7 
  getDocumentationStatus: function (call_id, student_id, token) {
    return api_instance.get(`${endpoint}/get-state/${call_id}/${student_id}/`,{
      headers: { Authorization: `Bearer ${token}` },
      params: {
        call_id,
        student_id,
      }
    })
  }
};
