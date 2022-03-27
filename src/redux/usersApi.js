import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const usersHeaders = {
    "Content-Type": "application/json",
    'authorization': `Bearer ${localStorage.getItem("authToken")}`
};

const baseUrl = 'http://localhost:4000/private';

const createRequest = (url) => ({ url, headers: usersHeaders})

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => createRequest(`/user`),
        }),

       
    })
});

export const { useGetUserQuery } = usersApi;