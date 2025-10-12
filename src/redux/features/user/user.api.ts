import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userTransaction: builder.query({
      query: (userNumber) => ({
        url: `/transactions/user/${userNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserTransactionQuery } = userApi;
