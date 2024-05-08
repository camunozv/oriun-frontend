import api_instance from "../base.api";

const endpoint = 'application/region_call/'

export const apitypePos = {
    getRegionCall: function(callId, token){
        return api_instance.get(endpoint,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: {
                call: callId
            }
        })
    }
}