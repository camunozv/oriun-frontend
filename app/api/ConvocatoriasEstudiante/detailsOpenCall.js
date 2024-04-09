import api_instance from "../base.api";

const endpoint = 'call/open';

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