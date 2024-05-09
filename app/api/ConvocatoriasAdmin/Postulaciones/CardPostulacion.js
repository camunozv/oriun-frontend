import api_instance from "../../base.api";

const endpoint = "application/applicants/";

export const adminPostulacion = {
  getPostulacionGeneral: function (
    student_id,

    call_id,

    state_documents,

    token,

  ) {
    return api_instance.get(`${endpoint}/${call_id}`, {
        headers:{'Authorization':`Bearer ${token}`},
        params: { student_id: student_id, state_documents: state_documents },
    });
  },
};
