import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Provider } from 'react-redux'
export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/' }),
    endpoints: (builder) => ({
        //getmethod
        getAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ['accounts']
        }),
        //post method 
        addAccounts: builder.mutation({
            query: (amout, id) => ({
                url: `accounts`,
                method: 'POST',
                body: {
                    amount: amout,
                    id: id
                },

            }),
            invalidatesTags: ['accounts']
        }),
        //delete
        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['accounts']
        }),
        //update method  it in we send only one object or value not more then one send 
        updateAccounts: builder.mutation({
            query: ({ id, amount }) => ({
                url: `accounts/${id}`,
                method: 'PATCH',
                body: {
                    amount: amount,

                },

            }),
            invalidatesTags: ['accounts']
        }),
    }),
})

export const { useGetAccountsQuery, useAddAccountsMutation, useDeleteAccountsMutation, useUpdateAccountsMutation } = adminApi