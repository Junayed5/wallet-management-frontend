import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userTransaction: builder.query({
      query: (userNumber) => ({
        url: `/transactions/user/${userNumber}`,
        method: "GET",
      }),
    }),
    sendMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/send-money`,
        method: "POST",
        data: receiveInfo
      }),
    }),
    withdrawMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/cash-out`,
        method: "POST",
        data: receiveInfo
      }),
    }),
    addMoney: builder.mutation({
      query: (receiveInfo) => ({
        url: `/user/add-money`,
        method: "POST",
        data: receiveInfo
      }),
    }),
  }),
});

export const { useUserTransactionQuery, useSendMoneyMutation, useWithdrawMoneyMutation, useAddMoneyMutation } = userApi;
