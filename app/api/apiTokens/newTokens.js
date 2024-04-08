import api_instance from "../base.api";

const endpoint = '';

export const apiGetNewAccess = {
    postRefresh: function({refresh})
    {
        return api_instance.post(`${endpoint}`,{
            refresh: refresh
        })
    }
}