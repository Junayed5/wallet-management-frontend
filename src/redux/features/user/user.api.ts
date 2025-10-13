import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userTransaction: builder.query({
      query: ({userNumber, params}) => ({
        url: `/transactions/user/${userNumber}`,
        method: "GET",
        params: params
      }),
      providesTags: ["Transaction"]
    }),
    sendMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/send-money`,
        method: "POST",
        data: receiveInfo
      }),
      invalidatesTags: ["Transaction"]
    }),
    withdrawMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/cash-out`,
        method: "POST",
        data: receiveInfo
      }),
      invalidatesTags: ["Transaction"]
    }),
    addMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/add-money`,
        method: "POST",
        data: receiveInfo
      }),
      invalidatesTags: ["Transaction"]
    }),
  }),
});

export const { useUserTransactionQuery, useSendMoneyMutation, useWithdrawMoneyMutation, useAddMoneyMutation } = userApi;
