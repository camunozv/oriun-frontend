import api_instance from "../base.api";

const endpoint = "call/api/opened/"

export const apiAdminOpenedCalls = {

    getAdminOpenedCalls : function (token) {
        return api_instance.get(`${endpoint}`,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
    },

    
}