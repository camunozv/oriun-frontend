import api_instance from "../base.api";

const endpoint_1 = "call/statistics/";

export const apiCharts = {

    getInfoCharts: function (data_student, data_call, token) {
        return api_instance.get(`${endpoint_1}?data_student=${data_student}&data_call=${data_call}`,{
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
    }
};
