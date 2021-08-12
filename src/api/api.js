import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY" : "8885ff3c-397c-4f00-abf1-fdb595df5be0"
    },
});

export const usersAPI = {
   getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return  response.data;
            });
    }
}



