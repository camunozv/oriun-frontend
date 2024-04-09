// call/ api/ [name='calls_list']
// call/ api/<int:pk>/ [name='calls_detail']
import api_instance from "../base.api";

// 6 methods implemented here.
const endpoint = "call/api/";

export default apiAdminCalls = {

  // Endpoint no.7
// | Field Name            | Type          | Description                                               |
// |----------------------|---------------|------------------------------------------------------------|
// |`university_id`       | int           | ID of the University offering the call.                    | 
// | `active`             | bool          | True if is active, false otherwise                         |
// | `begin_date`         | Date          | Calls start date.(YYYY-MM-DD)                              |
// | `deadline`           | Date          | Calls deadline date for submission.(YYYY-MM-DD)            |
// | `min_advance`        | Float         | Minimum advance required for application.                  |
// | `min_papa`           | Float         | Minimum PAPA score required for application.               |
// | `format`             | String        | Format of the call(virtual,presencial or mixed).           |
// | `study_level`        | String        | Value from (pre_pregrado,pos_postgrado or doc_doctorado).  |
// | `year`               | Integer       | Year of the exchange.                                      |
// | `semester`           | Integer       | Semester of the exchange. (1,2)                            |
// | `language`           | String        | Language of the call according to ISO 639-1                |
// | `description`        | Text          | Description of the call.                                   |
// | `available_slots`    | Integer       | Number of available slots for the call.                    |
// | `note`               | Text          | Additional notes about the call.                           |
// | `highest_PAPA_winner`| Float         | Highest PAPA score among winners of the call.              |
// | `minium_PAPA_winner` | Float         | Minimum PAPA score among winners of the call.              |
// | `selected`           | Integer       | Number of winners.                                         |
  getAdminAllCalls: function (token) {
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

  // Endpoint no.8
// **Inputs:** 
// | Field Name           | Required  | Type          | Description                                                |
// |----------------------|-----------|---------------|------------------------------------------------------------|
// |`university_id`       | YES       | int           | ID of the University offering the call.                    | 
// | `active`             | YES       | bool          | True if is active, false otherwise                         |
// | `begin_date`         | YES       | Date          | Calls start date.(YYYY-MM-DD)                              |
// | `deadline`           | YES       | Date          | Calls deadline date for submission.(YYYY-MM-DD)            |
// | `min_advance`        | YES       | Float         | Minimum advance required for application.                  |
// | `min_papa`           | YES       | Float         | Minimum PAPA score required for application.               |
// | `format`             | YES       | String        | Format of the call(virtual,presencial or mixed).           |
// | `study_level`        | YES       | String        | Value from (pre_pregrado,pos_postgrado or doc_doctorado).  |
// | `year`               | YES       | Integer       | Year of the exchange.                                      |
// | `semester`           | YES       | Integer       | Semester of the exchange. (1,2)                            |
// | `language`           | YES       | String        | Language of the call according to ISO 639-1                |
// | `description`        | YES       | Text          | Description of the call.                                   |
// | `available_slots`    | YES       | Integer       | Number of available slots for the call.                    |
// | `note`               | NO        | Text          | Additional notes about the call.                           |
// | `highest_PAPA_winner`| NO        | Float         | Highest PAPA score among winners of the call.              |
// | `minium_PAPA_winner` | NO        | Float         | Minimum PAPA score among winners of the call.              |
// | `selected`           | NO        | Integer       | Number of winners.                                         |


// **Outputs:**
// | Field Name           | Type          | Description                                                |
// |----------------------|---------------|------------------------------------------------------------|
// |`university_id`       | int           | ID of the University offering the call.                    | 
// | `active`             | bool          | True if is active, false otherwise                         |
// | `begin_date`         | Date          | Calls start date.(YYYY-MM-DD)                              |
// | `deadline`           | Date          | Calls deadline date for submission.(YYYY-MM-DD)            |
// | `min_advance`        | Float         | Minimum advance required for application.                  |
// | `min_papa`           | Float         | Minimum PAPA score required for application.               |
// | `format`             | String        | Format of the call(virtual,presencial or mixed).           |
// | `study_level`        | String        | Value from (pre_pregrado,pos_postgrado or doc_doctorado).  |
// | `year`               | Integer       | Year of the exchange.                                      |
// | `semester`           | Integer       | Semester of the exchange. (1,2)                            |
// | `language`           | String        | Language of the call according to ISO 639-1                |
// | `description`        | Text          | Description of the call.                                   |
// | `available_slots`    | Integer       | Number of available slots for the call.                    |
// | `note`               | Text          | Additional notes about the call.                           |
// | `highest_PAPA_winner`| Float         | Highest PAPA score among winners of the call.              |
// | `minium_PAPA_winner` | Float         | Minimum PAPA score among winners of the call.              |
// | `selected`           | Integer       | Number of winners.                                         |
  postAdminCalls: function (
    univerisity_id,
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
        univerisity_id,
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
  
// Endpoint no.9
//   **Inputs:** 
// | Field Name           | Required      | Type          | Description                                      |
// |----------------------|---------------|---------------|--------------------------------------------------|
// |`call_id`             | YES - In Path | int           | ID of the call to be updated.                    |


// **Outputs:**
// | Field Name           | Type          | Description                                                |
// |----------------------|---------------|------------------------------------------------------------|
// |`id`                  | int           | ID of the call.                    | 
// |`university_id`       | int           | ID of the University offering the call.                    | 
// | `active`             | bool          | True if is active, false otherwise                         |
// | `begin_date`         | Date          | Calls start date.(YYYY-MM-DD)                              |
// | `deadline`           | Date          | Calls deadline date for submission.(YYYY-MM-DD)            |
// | `min_advance`        | Float         | Minimum advance required for application.                  |
// | `min_papa`           | Float         | Minimum PAPA score required for application.               |
// | `format`             | String        | Format of the call(virtual,presencial or mixed).           |
// | `study_level`        | String        | Value from (pre_pregrado,pos_postgrado or doc_doctorado).  |
// | `year`               | Integer       | Year of the exchange.                                      |
// | `semester`           | Integer       | Semester of the exchange. (1,2)                            |
// | `language`           | String        | Language of the call according to ISO 639-1                |
// | `description`        | Text          | Description of the call.                                   |
// | `available_slots`    | Integer       | Number of available slots for the call.                    |
// | `note`               | Text          | Additional notes about the call.                           |
// | `highest_PAPA_winner`| Float         | Highest PAPA score among winners of the call.              |
// | `minium_PAPA_winner` | Float         | Minimum PAPA score among winners of the call.              |
// | `selected`           | Integer       | Number of winners.                                         |
  putAdminCallsUpdate: function (
    id,
    university_id ,
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
      `${endpoint}/${id}`,
      {
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
        token,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
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
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     }
  //   );
  // },

  // Endpoint no.10
//   **Inputs:** 
// | Field Name           | Required      | Type          | Description                                      |
// |----------------------|---------------|---------------|--------------------------------------------------|
// |`call_id`             | YES - In Path | int           | ID of the call to be updated.                    |
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
