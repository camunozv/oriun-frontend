import api_instance from "../base.api";

const endpoint = 'call/open';

/**
 * DESCRIPTION:
 * Used to view all details of the specific open call. 
 * 
 * OUTPUTS:
    | Field Name        | Type          | Description                                           |
    |-------------------|---------------|-------------------------------------------------------|
    |`university_name`  | String        | Name of the university offering the call.             |
    | `begin_date`      | Date          | Start date of the call.(YYYY-MM-DD)                   |
    | `deadline`        | Date          | Deadline for application submission.(YYYY-MM-DD)      |
    | `min_advance`     | Float         | Minimum advance required for application.             |
    | `min_papa`        | Float         | Minimum PAPA score required for application.          |
    | `format`          | String        | Format of the call.(virtual,presencial or mixed)      |
    | `year`            | Integer       | Year of the call.                                     |
    | `semester`        | Integer       | Semester of the call.(1,2)                            |
    | `description`     | Text          | Description of the call. May be null.                 |
    | `available_slots` | Integer       | Number of available slots for the call.               |
    | `note`            | Text          | Additional notes about the call.May be null           |
 */


export const apiDetailsOpenCall = {
    
    // Tested
    getDetailsOpenCall : function (id, token){
        return api_instance.get(`${endpoint}/${id}`,{
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
    }
}