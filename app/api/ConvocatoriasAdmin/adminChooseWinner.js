import api_instance from "../base.api";

const endpoint_1 = "application";
const endpoint_2 = "call";

export const apiChooseWinner = {

  // Implemented: *
  getGeneralAppplicantsOrder: function (callId, token) {
    return api_instance.get(`${endpoint_1}/order/${callId}`, {
        headers : {
            // 'Authorization' : `Bearer ${token}`
            'Authorization' : `Bearer ${token}`
        }
    });
  },

  getGeneralApplicantsNoOrder: function (callId, token) {
    return api_instance.get(`${endpoint_1}/get_all/${callId}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: *
  getGeneralDocumentsOrder: function (callId, token) {

    return api_instance.get(`${endpoint_1}/order_docs/${callId}`, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: *
  getGeneralDocumentsPAPA: function (callId, token) {
    
    return api_instance.get(`${endpoint_1}/order_papa/${callId}` , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: *
  getGeneralDocumentsAdvance: function (callId, token) {
    
    return api_instance.get(`${endpoint_1}/order_adva/${callId}` , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: no languages are retrieved
  getGeneralDocumentsLanguage: function (callId, token) {
    
    return api_instance.get(`${endpoint_1}/order_lang/${callId}` , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: *
  getGeneralDocumentsPBM: function (callId, token) {
    
    return api_instance.get(`${endpoint_1}/order_pbm/${callId}` , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: 500
  postAssignWinner: function (call_id, student_id, token) {

    return api_instance.post(`${endpoint_1}/winner`, {call_id, student_id} , {
        headers: {
            'Authorization' : `Bearer ${token}`
        },
        
        
    })
  },

  // Implemented: 500
  postAssignNotWinner: function (call_id, student_id, token) {

    return api_instance.post(`${endpoint_1}/not_winner`, {call_id, student_id} , {
        headers: {
            'Authorization' : `Bearer ${token}`
        },
       
    }     
    )
  },

  // Implemented: 500
  postCloseCall: function (call_id, token) {

    return api_instance.post(`${endpoint_2}/set_closed`, {call_id} , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  // Implemented: 500
  postOpenCall: function (call_id, token) {

    return api_instance.post(`${endpoint_2}/set_open`, {call_id} , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  },

  getVerificationAssignWinners: function (call_id, token) {

    return api_instance.get(`${endpoint_1}/pre_assign_winners/${call_id}`, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
  }



};
