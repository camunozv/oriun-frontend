import api_instance from "../base.api";

const endpoint = "call/api_put";

/**
 * 
 * 
 * 

 * 
 * 
 */




export const adminUpdateCall = {
  putAdminUpdateCall: function (
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
    token
  ) {

    

    return api_instance.put(
      `${endpoint}/${id}/`,
      {
        ...data_c

      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        // body: {
        //     'university_id': university_id, 
        //     'active' : active,
        //     'begin_date' : begin_date,
        //     'deadline' : deadline,
        //     'min_advance' : min_advance,
        //     'min_papa' : min_papa,
        //     'format' : format,
        //     'study_level' : study_level,
        //     'year' : year,
        //     'semester' : semester,
        //     'language' : language,
        //     'description' : description,
        //     'available_slots' : available_slots,
        //     'note' : note,
        //     'highest_PAPA_winner' : highest_papa_winner,
        //     'minimum_PAPA_winner' : minimum_papa_winner,
        //     'selected' : selected 
        // } 
               
      },
    );
  },
};
