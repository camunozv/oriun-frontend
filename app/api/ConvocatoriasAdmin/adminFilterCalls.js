import api_instance from "../base.api";

const endpoint = "call/api/employee_filter/";

export const apiAdminFilterCalls = {
  //     **Inputs:**
  // | Field Name           | Required      | Type           | Description                                                |
  // |----------------------|---------------|----------------|------------------------------------------------------------|
  // |`active`              | Optional      | bool           | True if is active, false otherwise.                        |
  // |`university_id`       | Optional      | int            | ID of the University offering the call.                    |
  // |`university_name`     | Optional      | String         | Name of the University offering the call.                  |
  // |`deadline`            | Optional      | date           | Calls deadline date for submission.(YYYY-MM-DD)            |
  // |`format`              | Optional      | String (Enum)  | Format of the call(virtual,presencial or mixed).           |
  // |`study_level`         | Optional      | String (Enum)  | Value from (pre_pregrado,pos_postgrado or doc_doctorado).  |
  // |`year`                | Optional      | int            | Year of the exchange.                                      |
  // |`semester`            | Optional      | int            | Semester of the exchange. (1,2)                            |
  // |`region`              | Optional      | String (Enum)  | University region.*                                        |
  // |`country`             | Optional      | String         | University country.                                        |
  // |`language`            | Optional      | String (Enum)  | Language that is demanded by the call.                     |

  // * University Regions:
  //     {"value": "NA", "display": "Norte América"},
  //     {"value": "LA", "display": "Latinoamérica"},
  //     {"value": "EU", "display": "Europa"},
  //     {"value": "OC", "display": "Oceanía"},
  //     {"value": "AN", "display": "Uniandes"},
  //     {"value": "SG", "display": "Convenio Sigueme/Nacional"}

  // **Outputs:**
  // | Field Name           | Type          | Description                                                |
  // |----------------------|---------------|------------------------------------------------------------|
  // | `id`                 | int           | ID of the call.                    |
  // | `university_id`      | int           | ID of the University offering the call.                    |
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
  getAdminFilterCalls: function (
    active,
    university_id,
    university_name,
    deadline,
    formato,
    study_level,
    year,
    semester,
    region,
    country,
    language,
    token
  ) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        active,
        university_id,
        university_name,
        deadline,
        formato,
        study_level,
        year,
        semester,
        region,
        country,
        language,
      },
    });
  },
};
