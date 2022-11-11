import apiInstance from '../api/waterNotifApi';

authHeader()
export const usersService = {

    getAll: async ({ params }) => {
        return apiInstance.get(`/users`);
    },
   
};
