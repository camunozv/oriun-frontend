import api_instance from "../base.api";

const endpoint = "call/closed";

/**
 * DESCTIPTION:
 * Used to filter and display close calls based on several criteria, such as country, language requirement,
 * and university name. Retrieves a list of closed calls based on the provided criteria.
 * 
 * OUTPUTS:
 *  | `university_name`                 | String       | Name of the university offering the call.                        |
    | `country`                         | String       | Country where the call is offered.                               |
    | `language`                        | ArrayField   | Language requirement for the call.                               |
    | `deadline`                        | Date         | Deadline for application submission for the call.(YYYY-MM-DD)    |
    | `minium_PAPA_winner`              | Float        | Minimum PAPA score among winners of the call.                    |
 */

export const apiFilterClosedCalls = {
  getFilterClosedCalls: function (country, language, university_name, token) {
    return api_instance.get(`${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        country: country,
        language: language,
        university_name: university_name,
      },
    });
  },
};
