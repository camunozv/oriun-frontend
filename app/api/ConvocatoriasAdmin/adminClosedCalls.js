import api_instance from "../base.api";

const endpoint = "call/api/closed/";

export const apiAdminClosedCalls = {

    getAdminClosedCalls : function (token) {
        return api_instance.get(`${endpoint}`, {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
    },
}