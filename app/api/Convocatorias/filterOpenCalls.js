import api_instance from "../base.api";

const endpoint = '/call/open/';

/**
 * DESCRIPTION: 
 * Used to filter and display open calls based on several criteria, such as  country,
 * language requirement and university name. Retrieves a list of open calls based on the provided criteria.
 * 
 * OUTPUTS:
 * 
  | `university_name`   | String     | Name of the university offering the call.                    |
  | `country`           | String     | Country where the call is offered.                           |
  | `language`          | ArrayField | Language requirement for the call.                           |
  | `deadline`          | Date       | Deadline for application submission for the call.(YYYY-MM-DD)|

 */

export const apiFilterOpenCalls = {
  getFilterOpenCalls: function (country, language, name_university, token) {
    
    return api_instance.get("/call/open/",{
      headers : {
        Authorization : `Bearer ${token}`
      },
      params : {
        country: country,
        name_university: name_university,
        language: language
      }
    });
  },
};
// export const apiFilterOpenCalls = {
//   getFilterOpenCalls: function (country, language, name_university, token) {
    
//     return api_instance.get("/call/open/",{
//       headers : {
//         Authorization : `Bearer ${token}`
//       },
//       params : {
//         country: country,
//         name_university: name_university,
//         language: language
//       }
//     });
//   },
// };

/***
 * 
 * `${endpoint}`, {
      params: {
        name_university: name_university,
        country: country,
        language: language,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
 */

//Authorization
//**nataly
// 123456789 */
